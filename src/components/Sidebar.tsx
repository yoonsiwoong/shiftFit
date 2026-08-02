import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="h-full w-64 hidden md:flex flex-col bg-surface-container-low border-r border-border-subtle p-4 gap-2">
      <div className="flex flex-col mb-8 px-2">
        <span className="font-title-md text-title-md text-primary">개요</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">정밀 스케줄링</span>
      </div>
      
      <Link href="/" className="flex items-center gap-3 p-3 bg-primary-container text-on-primary-container rounded-lg font-bold transition-transform active:scale-95">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
        <span className="font-body-md text-body-md">개요</span>
      </Link>
      <Link href="#" className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all">
        <span className="material-symbols-outlined">calendar_today</span>
        <span className="font-body-md text-body-md">캘린더</span>
      </Link>
      <Link href="#" className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all">
        <span className="material-symbols-outlined">bar_chart</span>
        <span className="font-body-md text-body-md">통계</span>
      </Link>
      <Link href="#" className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all">
        <span className="material-symbols-outlined">settings</span>
        <span className="font-body-md text-body-md">설정</span>
      </Link>
      
      <div className="mt-auto p-4 bg-primary/5 rounded-xl border border-primary/10">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-sm">bolt</span>
          <span className="font-label-sm text-label-sm text-primary uppercase">번아웃 알림</span>
        </div>
        <p className="text-[12px] text-on-surface-variant leading-relaxed">
          일정이 85% 찼습니다. "심층 연구"를 내일로 자동 연기했습니다. 🫠
        </p>
      </div>
    </aside>
  );
}
