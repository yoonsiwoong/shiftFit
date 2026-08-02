export default function TimelineCanvas() {
  return (
    <main className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-1">오늘의 테트리스</h1>
            <p className="text-on-surface-variant">10월 23일 월요일</p>
          </div>
          <div className="flex bg-surface-container rounded-full p-1 border border-border-subtle">
            <button className="px-4 py-1.5 rounded-full text-label-sm font-label-sm transition-all bg-white shadow-sm text-primary">일간</button>
            <button className="px-4 py-1.5 rounded-full text-label-sm font-label-sm transition-all text-on-surface-variant">주간</button>
          </div>
        </div>
        
        {/* Timeline Grid */}
        <div className="relative grid grid-cols-[60px_1fr] gap-x-4 pb-32">
          {/* Hour Markers */}
          <div className="flex flex-col text-on-surface-variant">
            <div className="h-16 flex items-start justify-end pr-2 text-xs font-mono-label">09:00</div>
            <div className="h-16 flex items-start justify-end pr-2 text-xs font-mono-label">10:00</div>
            <div className="h-16 flex items-start justify-end pr-2 text-xs font-mono-label">11:00</div>
            <div className="h-16 flex items-start justify-end pr-2 text-xs font-mono-label">12:00</div>
            <div className="h-16 flex items-start justify-end pr-2 text-xs font-mono-label">13:00</div>
            <div className="h-16 flex items-start justify-end pr-2 text-xs font-mono-label">14:00</div>
            <div className="h-16 flex items-start justify-end pr-2 text-xs font-mono-label">15:00</div>
          </div>
          
          {/* Canvas Blocks */}
          <div className="relative w-full border-l border-border-subtle">
            {/* Hour lines */}
            <div className="absolute inset-0 flex flex-col pointer-events-none">
              <div className="h-16 border-b border-border-subtle/50"></div>
              <div className="h-16 border-b border-border-subtle/50"></div>
              <div className="h-16 border-b border-border-subtle/50"></div>
              <div className="h-16 border-b border-border-subtle/50"></div>
              <div className="h-16 border-b border-border-subtle/50"></div>
              <div className="h-16 border-b border-border-subtle/50"></div>
              <div className="h-16 border-b border-border-subtle/50"></div>
            </div>
            
            {/* Time Blocks (Mock Data for UI) */}
            <div className="relative flex flex-col gap-1 pr-4">
              <div className="h-24 locked-slot border border-border-subtle rounded-xl flex flex-col p-3 group transition-all hover:bg-white/50">
                <div className="flex justify-between items-start">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">자료구조 강의</span>
                  <span className="material-symbols-outlined text-on-surface-variant scale-75">lock</span>
                </div>
                <span className="text-xs text-outline">09:00 - 10:30</span>
              </div>
              
              <div className="h-16 bg-white border-l-4 border-persona-academic shadow-[0px_4px_12px_rgba(0,0,0,0.03)] rounded-xl flex flex-col p-3 transition-transform hover:scale-[1.02] cursor-pointer">
                <span className="font-label-sm text-label-sm text-on-surface font-bold">강의 노트 복습</span>
                <span className="text-xs text-outline">10:30 - 11:30</span>
              </div>
              
              <div className="h-16 bg-white border-l-4 border-persona-academic shadow-[0px_4px_12px_rgba(0,0,0,0.03)] rounded-xl flex flex-col p-3 transition-transform hover:scale-[1.02] cursor-pointer">
                <span className="font-label-sm text-label-sm text-on-surface font-bold">실험 과제 #3</span>
                <span className="text-xs text-outline">11:30 - 12:30</span>
              </div>
              
              <div className="h-16 border border-dashed border-outline-variant bg-surface-muted/50 rounded-xl flex items-center justify-center">
                <span className="text-xs text-outline italic">점심 시간 / 여유 시간</span>
              </div>
              
              <div className="h-24 bg-white border-l-4 border-persona-work shadow-[0px_4px_12px_rgba(0,0,0,0.03)] rounded-xl flex flex-col p-3 transition-transform hover:scale-[1.02] cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-[16px] text-persona-work">work</span>
                  <span className="font-label-sm text-label-sm text-on-surface font-bold">프론트엔드 인턴 업무</span>
                </div>
                <span className="text-xs text-outline">13:30 - 15:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
