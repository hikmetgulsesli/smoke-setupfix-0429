import { HabitForm } from '../components/HabitForm';
import { HabitList } from '../components/HabitList';
import type { Habit } from '../types/habit';

interface HataDurumuErrorStateProps {
  habits: Habit[];
  onAdd: (habit: Habit) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  error: string;
  onDismiss: () => void;
}

export function HataDurumuErrorState({ habits, onAdd, onToggle, onDelete, error, onDismiss }: HataDurumuErrorStateProps) {
  const today = new Date().toLocaleDateString('tr-TR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface surface-container-high docked full-width top-0 z-40 border-b border-outline-variant flat no shadows font-body text-sm antialiased flex justify-between items-center px-5 h-16 w-full mx-auto">
        <div className="text-xl font-bold text-primary tracking-tight font-display text-display flex items-center gap-2">
          Alışkanlık Takipçisi
        </div>
        <div className="hidden md:flex gap-6">
          <a className="text-primary font-semibold hover:bg-surface-variant hover:text-primary-fixed transition-colors active:scale-95 px-3 py-2 rounded-lg flex items-center gap-2" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            Alışkanlıklar
          </a>
          <a className="text-on-surface hover:bg-surface-variant hover:text-primary-fixed transition-colors active:scale-95 px-3 py-2 rounded-lg flex items-center gap-2" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="material-symbols-outlined">leaderboard</span>
            İstatistikler
          </a>
          <a className="text-on-surface hover:bg-surface-variant hover:text-primary-fixed transition-colors active:scale-95 px-3 py-2 rounded-lg flex items-center gap-2" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="material-symbols-outlined">person</span>
            Profil
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-on-surface hover:bg-surface-variant hover:text-primary transition-colors p-2 rounded-full active:scale-95 cursor-pointer"
            aria-label="Ayarlar"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>
      {/* Error Banner */}
      <div
        className="w-full bg-error-container text-on-error-container px-5 py-3 flex items-start gap-3 border-b border-error sticky top-16 z-30"
        role="alert"
        aria-live="assertive"
      >
        <span className="material-symbols-outlined mt-0.5 text-error">error</span>
        <div className="flex flex-col flex-1">
          <span className="font-h2 text-h2 text-error">Veriler kaydedilemedi.</span>
          <span className="font-body-md text-body-md text-on-error-container/80">{error}</span>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Hatayı kapat"
          className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-fixed transition-colors active:scale-95 cursor-pointer shrink-0"
        >
          <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
        </button>
      </div>
      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-5 py-8 md:py-12 flex flex-col gap-8 opacity-80 pointer-events-none">
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="font-display text-display text-on-surface">Bugün</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">{today}</p>
            </div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-12 gap-lg">
            <HabitForm onAdd={onAdd} />
            <HabitList habits={habits} onToggle={onToggle} onDelete={onDelete} />
          </div>
        </section>
      </main>
      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden bg-surface/95 backdrop-blur-md font-body text-[10px] font-medium text-primary fixed bottom-0 w-full z-50 border-t border-outline-variant shadow-2xl flex justify-around items-center px-4 py-3 h-20 left-0">
        <a className="flex flex-col items-center justify-center text-primary bg-primary/10 rounded-xl px-3 py-1 hover:text-primary-fixed active:scale-90 transition-all" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
          <span>Alışkanlıklar</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary-fixed active:scale-90 transition-all" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="material-symbols-outlined mb-1">leaderboard</span>
          <span>İstatistikler</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary-fixed active:scale-90 transition-all" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="material-symbols-outlined mb-1">person</span>
          <span>Profil</span>
        </a>
      </nav>
    </>
  );
}
