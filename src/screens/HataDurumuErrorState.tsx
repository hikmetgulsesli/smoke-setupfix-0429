// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Durumu (Error State)
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

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

export function HataDurumuErrorState({
  habits,
  onAdd,
  onToggle,
  onDelete,
  error,
  onDismiss,
}: HataDurumuErrorStateProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface surface-container-high docked full-width top-0 z-40 border-b border-outline-variant flat no shadows font-inter text-sm antialiased flex justify-between items-center px-5 h-16 w-full mx-auto">
        <div className="text-xl font-bold text-primary tracking-tight font-display text-display flex items-center gap-2">
          Alışkanlık Takipçisi
        </div>
        <div className="hidden md:flex gap-6">
          <a
            className="text-primary font-semibold hover:bg-surface-variant hover:text-primary-fixed transition-colors active:scale-95 px-3 py-2 rounded-lg flex items-center gap-2"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="material-symbols-outlined" data-icon="check_circle" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            Alışkanlıklar
          </a>
          <a
            className="text-on-surface hover:bg-surface-variant hover:text-primary-fixed transition-colors active:scale-95 px-3 py-2 rounded-lg flex items-center gap-2"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
            İstatistikler
          </a>
          <a
            className="text-on-surface hover:bg-surface-variant hover:text-primary-fixed transition-colors active:scale-95 px-3 py-2 rounded-lg flex items-center gap-2"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="material-symbols-outlined" data-icon="person">person</span>
            Profil
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-on-surface hover:bg-surface-variant hover:text-primary transition-colors p-2 rounded-full active:scale-95"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Ayarlar"
          >
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
          </button>
        </div>
      </header>

      {/* Error Banner */}
      <div className="w-full bg-error-container text-on-error-container px-5 py-3 flex items-start gap-3 border-b border-error sticky top-16 z-30">
        <span className="material-symbols-outlined mt-0.5 text-error" data-icon="error">error</span>
        <div className="flex flex-col flex-1">
          <span className="font-h2 text-h2 text-error">Veriler kaydedilemedi.</span>
          <span className="font-body-md text-body-md text-on-error-container/80">{error}</span>
        </div>
        <button
          className="text-on-error-container hover:bg-error/20 p-2 rounded-full transition-colors active:scale-95 cursor-pointer"
          onClick={onDismiss}
          aria-label="Hatayı kapat"
        >
          <span className="material-symbols-outlined" data-icon="check">check</span>
        </button>
      </div>

      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-5 py-8 md:py-12 flex flex-col gap-8 opacity-80 pointer-events-none">
        <HabitForm onAdd={onAdd} />
        <HabitList habits={habits} onToggle={onToggle} onDelete={onDelete} />
      </main>

      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden bg-surface/95 backdrop-blur-md font-inter text-[10px] font-medium text-primary fixed bottom-0 w-full z-50 border-t border-outline-variant shadow-2xl flex justify-around items-center px-4 py-3 h-20 left-0">
        <a
          className="flex flex-col items-center justify-center text-primary bg-primary/10 rounded-xl px-3 py-1 hover:text-primary-fixed active:scale-90 transition-all"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="material-symbols-outlined mb-1" data-icon="check_circle" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <span>Alışkanlıklar</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary-fixed active:scale-90 transition-all"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="material-symbols-outlined mb-1" data-icon="leaderboard">leaderboard</span>
          <span>İstatistikler</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary-fixed active:scale-90 transition-all"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="material-symbols-outlined mb-1" data-icon="person">person</span>
          <span>Profil</span>
        </a>
      </nav>
    </>
  );
}
