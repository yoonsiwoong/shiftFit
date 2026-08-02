'use client';

import { useState } from 'react';
import { usePersonaStore } from '@/store/personaStore';
import { Send, Loader2 } from 'lucide-react';

export default function BrainDumpInput() {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const personas = usePersonaStore((state) => state.personas);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const res = await fetch('/api/ai/braindump', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, personas }),
      });

      if (!res.ok) throw new Error('Failed to parse brain dump');

      const data = await res.json();
      console.log('Task saved:', data.task);
      
      const targetPersona = personas.find(p => p.id === data.task.personaId);
      alert(`✅ [${targetPersona?.name || '할 일'}] '${data.task.title}' (${data.task.durationMinutes}분) 항목이 추가되었습니다!`);
      
      setText('');
      // TODO: refresh tasks list (Phase 3)
    } catch (error) {
      console.error(error);
      alert('할 일을 추가하는 중 오류가 발생했습니다. API 키나 네트워크 연결을 확인해 주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex flex-col p-margin-mobile md:px-margin-desktop bg-surface/95 backdrop-blur-sm border-t border-border-subtle pb-6 md:pb-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto w-full relative">
        <input 
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="브레인 덤프: '오늘 밤 2시간 공부해야 해...' "
          disabled={isLoading}
          className={`w-full h-14 pl-12 pr-28 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-body-md placeholder:text-outline shadow-inner ${text.length > 5 ? 'brain-dump-shimmer' : ''}`}
        />
        <span className="material-symbols-outlined absolute left-4 top-4 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_fix_high</span>
        <div className="absolute right-2 top-2 flex items-center gap-2">
          <span className="text-[10px] font-mono-label text-outline bg-white px-2 py-1 rounded-md border border-border-subtle hidden sm:block">Enter ↵</span>
          <button 
            type="submit"
            disabled={!text.trim() || isLoading}
            className="bg-primary text-white px-4 py-2 rounded-xl text-label-sm font-label-sm hover:bg-primary-container transition-colors disabled:opacity-50 flex items-center gap-1"
          >
            {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
            {isLoading ? '배치 중...' : '배치하기'}
          </button>
        </div>
      </form>
      
      {/* Mobile Bottom Nav Spacer */}
      <div className="md:hidden h-16 w-full flex justify-around items-center pt-4">
        <div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-2xl p-2 w-16">
          <span className="material-symbols-outlined">auto_fix_high</span>
          <span className="text-[10px] font-label-sm">배치</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant p-2">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-[10px] font-label-sm">캘린더</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant p-2">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-label-sm">프로필</span>
        </div>
      </div>
    </div>
  );
}
