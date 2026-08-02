import { create } from 'zustand';

export interface Persona {
  id: number;
  name: string;
  colorCode: string;
}

interface PersonaState {
  activePersonaId: number | null;
  personas: Persona[];
  setActivePersonaId: (id: number | null) => void;
  setPersonas: (personas: Persona[]) => void;
}

export const usePersonaStore = create<PersonaState>((set) => ({
  activePersonaId: null,
  personas: [
    { id: 1, name: '대학생', colorCode: 'bg-blue-500' },
    { id: 2, name: '학원 강사', colorCode: 'bg-green-500' },
    { id: 3, name: '개인 시간', colorCode: 'bg-purple-500' },
  ], // Initial mock data for MVP
  setActivePersonaId: (id) => set({ activePersonaId: id }),
  setPersonas: (personas) => set({ personas }),
}));
