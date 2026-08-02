import { google } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { z } from 'zod';
import { NextResponse } from 'next/server';
import { db } from '@/db';
import { tasks } from '@/db/schema';

export async function POST(req: Request) {
  try {
    const { text, personas } = await req.json();

    if (!text || !personas || personas.length === 0) {
      return NextResponse.json({ error: 'Missing text or personas' }, { status: 400 });
    }

    const personaDescriptions = personas.map((p: any) => `ID: ${p.id}, 이름: ${p.name}`).join('\n');

    const result = await generateObject({
      model: google('gemini-1.5-flash'),
      system: `당신은 사용자의 자연어 입력을 분석하여 구조화된 할 일(Task) 데이터를 추출하는 똑똑한 AI 스케줄러 비서입니다.
사용자의 입력에서 다음 3가지를 추출하세요:
1. 작업명(title): 할 일의 명확한 제목
2. 예상 소요 시간(durationMinutes): 분 단위 숫자 (언급이 없다면 30)
3. 페르소나 ID(personaId): 해당 할 일이 속해야 할 페르소나의 ID

현재 가능한 페르소나 목록:
${personaDescriptions}

입력된 문맥(예: '과학 준비', '대학 과제' 등)을 파악하여 위 페르소나 목록 중 가장 알맞은 ID를 반환하세요.`,
      prompt: text,
      schema: z.object({
        title: z.string().describe('할 일의 간결하고 명확한 제목'),
        durationMinutes: z.number().describe('분 단위 예상 소요 시간 (기본 30)'),
        personaId: z.number().describe('가장 적절한 페르소나의 ID'),
      }),
    });

    const { title, durationMinutes, personaId } = result.object;

    // Ensure AI picked a valid persona ID, fallback to the first one if it hallucinated
    const validPersonaId = personas.some((p: any) => p.id === personaId) ? personaId : personas[0].id;

    // Save to Database
    const [newTask] = await db.insert(tasks).values({
      title,
      durationMinutes,
      personaId: validPersonaId,
      status: 'inbox',
      priority: '중',
    }).returning();

    return NextResponse.json({ task: newTask });
  } catch (error) {
    console.error('Brain dump error:', error);
    return NextResponse.json({ error: 'Failed to process brain dump' }, { status: 500 });
  }
}
