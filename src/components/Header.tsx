import PersonaTabs from '@/components/PersonaTabs';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md border-b border-border-subtle shadow-sm flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16">
      <div className="flex items-center gap-8">
        <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed-dim">ShiftFit</span>
        <nav className="hidden md:flex gap-6 pt-1">
          <PersonaTabs />
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-on-surface-variant scale-95 active:scale-90 transition-transform">account_circle</button>
      </div>
    </header>
  );
}
