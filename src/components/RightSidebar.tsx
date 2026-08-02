export default function RightSidebar() {
  return (
    <aside className="hidden lg:flex w-80 h-full flex-col bg-surface border-l border-border-subtle p-6 overflow-y-auto custom-scrollbar">
      <h3 className="font-title-md text-title-md text-on-surface mb-6">예정된 일정 - 학생</h3>
      <div className="space-y-4">
        {/* Task Card */}
        <div className="p-4 bg-surface-container-lowest rounded-xl border border-border-subtle hover:border-primary/30 transition-colors group">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-mono-label bg-persona-academic/10 text-persona-academic px-2 py-0.5 rounded">높은 우선순위</span>
            <button className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">more_horiz</button>
          </div>
          <h4 className="font-body-md text-body-md font-bold mb-1">알고리즘 기말 프로젝트</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed mb-3">마감 3일 전. 집중 시간 4시간 필요.</p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-outline">schedule</span>
            <span className="text-[11px] text-outline">Fit Score: 92%</span>
          </div>
        </div>
        
        {/* Task Card */}
        <div className="p-4 bg-surface-container-lowest rounded-xl border border-border-subtle hover:border-primary/30 transition-colors group">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-mono-label bg-surface-container-highest text-outline px-2 py-0.5 rounded">보조 일정</span>
            <button className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">more_horiz</button>
          </div>
          <h4 className="font-body-md text-body-md font-bold mb-1">독서: 기술 윤리</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed mb-3">선택사항: 토론 준비.</p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-outline">history</span>
            <span className="text-[11px] text-outline">Fit Score: 76%</span>
          </div>
        </div>
        
        {/* Bento-style Stats */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border-subtle mt-4">
          <div className="p-3 bg-secondary-container/20 rounded-xl text-center">
            <span className="block font-headline-lg text-secondary">82%</span>
            <span className="text-[10px] uppercase font-bold text-on-secondary-container">집중도</span>
          </div>
          <div className="p-3 bg-primary-container/10 rounded-xl text-center">
            <span className="block font-headline-lg text-primary">3.2h</span>
            <span className="text-[10px] uppercase font-bold text-primary">학습 완료</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 rounded-2xl overflow-hidden relative h-48 bg-surface-container-high border border-border-subtle">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="material-symbols-outlined text-outline text-4xl mb-4">image</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 z-10">
          <p className="text-white text-xs font-medium">"정밀함은 집중의 산물입니다."</p>
        </div>
      </div>
    </aside>
  );
}
