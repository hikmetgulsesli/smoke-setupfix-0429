// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa (Dashboard)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { HabitForm } from '../components/HabitForm';
import { HabitList } from '../components/HabitList';
import type { Habit } from '../types/habit';

interface AnaSayfaDashboardProps {
  habits: Habit[];
  onAdd: (habit: Habit) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function AnaSayfaDashboard({ habits, onAdd, onToggle, onDelete }: AnaSayfaDashboardProps) {
  return (
    <>
      {/* TopNavBar Web */}
      <header className="hidden md:flex bg-surface flex-col font-body text-sm antialiased docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center px-5 h-16 w-full max-w-7xl mx-auto sticky z-50">
        <div className="flex items-center justify-between w-full h-full">
          <h1 className="text-xl font-bold text-primary tracking-tight font-display">Alışkanlık Takipçisi</h1>
          <nav className="flex items-center gap-md">
            <a className="text-primary font-semibold active:scale-95 transition-transform flex items-center gap-xs" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              Alışkanlıklar
            </a>
            <a className="text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors active:scale-95 transition-transform px-sm py-xs rounded-DEFAULT flex items-center gap-xs" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <span className="material-symbols-outlined">leaderboard</span>
              İstatistikler
            </a>
            <a className="text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors active:scale-95 transition-transform px-sm py-xs rounded-DEFAULT flex items-center gap-xs" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <span className="material-symbols-outlined">person</span>
              Profil
            </a>
            <button aria-label="Ayarlar" className="text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors p-sm rounded-full ml-sm active:scale-95 transition-transform cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="material-symbols-outlined">settings</span>
            </button>
          </nav>
        </div>
      </header>
      {/* TopNavBar Mobile */}
      <header className="md:hidden bg-surface font-body text-sm antialiased flex justify-between items-center px-5 h-16 w-full sticky top-0 z-40 border-b border-outline-variant shadow-sm">
        <h1 className="text-xl font-bold text-primary tracking-tight font-display">Alışkanlık Takipçisi</h1>
        <button aria-label="Ayarlar" className="text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors p-sm rounded-full active:scale-95 transition-transform cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>
      <main className="max-w-7xl mx-auto p-margin md:p-lg grid grid-cols-4 md:grid-cols-12 gap-lg">
        <HabitForm onAdd={onAdd} />
        <HabitList habits={habits} onToggle={onToggle} onDelete={onDelete} />
      </main>
      {/* BottomNavBar Mobile */}
      <nav className="md:hidden bg-surface/95 backdrop-blur-md font-body text-[10px] font-medium fixed bottom-0 w-full z-50 border-t border-outline-variant shadow-2xl fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 h-20">
        <a className="flex flex-col items-center justify-center text-primary bg-primary/10 rounded-xl px-3 py-1 active:scale-90 transition-all" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
          <span>Alışkanlıklar</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-all px-3 py-1" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="material-symbols-outlined mb-1">leaderboard</span>
          <span>İstatistikler</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-all px-3 py-1" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="material-symbols-outlined mb-1">person</span>
          <span>Profil</span>
        </a>
      </nav>
    </>
  );
}
