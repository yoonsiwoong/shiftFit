'use client';

import { usePersonaStore } from '@/store/personaStore';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

export default function PersonaTabs() {
  const { personas, activePersonaId, setActivePersonaId } = usePersonaStore();

  // Set the first persona as active by default if none is selected
  useEffect(() => {
    if (activePersonaId === null && personas.length > 0) {
      setActivePersonaId(personas[0].id);
    }
  }, [activePersonaId, personas, setActivePersonaId]);

  return (
    <>
      {personas.map((persona) => {
        const isActive = activePersonaId === persona.id;
        return (
          <button
            key={persona.id}
            onClick={() => setActivePersonaId(persona.id)}
            className={`font-label-sm text-label-sm pb-1 transition-colors ${
              isActive 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {persona.name}
          </button>
        );
      })}
    </>
  );
}
