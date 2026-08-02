import { pgTable, serial, text, integer, timestamp, date, time } from 'drizzle-orm/pg-core';

export const personas = pgTable('personas', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  colorCode: text('color_code').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  durationMinutes: integer('duration_minutes').notNull(),
  priority: text('priority').notNull().default('중'), // 상, 중, 하
  deadline: date('deadline'),
  status: text('status').notNull().default('inbox'), // inbox, scheduled, completed, postponed
  personaId: integer('persona_id').references(() => personas.id).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const fixedEvents = pgTable('fixed_events', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  dayOfWeek: integer('day_of_week').notNull(), // 0: 일, 1: 월, ..., 6: 토
  startTime: time('start_time').notNull(), // HH:mm:ss
  endTime: time('end_time').notNull(),
  personaId: integer('persona_id').references(() => personas.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
