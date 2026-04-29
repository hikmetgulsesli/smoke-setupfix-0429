// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum (Empty State)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumEmptyStateProps {}

export function BosDurumEmptyState(props: BosDurumEmptyStateProps) {
  return (
    <>
      {/* TopNavBar (Shared Component) */}
      <header className="bg-slate-900 border-b border-slate-800 font-inter text-sm antialiased docked full-width top-0 w-full fixed z-50">
      <div className="flex justify-between items-center px-5 h-16 w-full max-w-7xl mx-auto">
      <div className="text-xl font-bold text-emerald-500 tracking-tight">Alışkanlık Takipçisi</div>
      {/* Desktop Navigation (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-8">
      <a className="text-emerald-500 font-semibold hover:bg-slate-800 hover:text-emerald-400 transition-colors active:scale-95 px-3 py-2 rounded-lg" href="#">Alışkanlıklar</a>
      <a className="text-slate-400 hover:bg-slate-800 hover:text-emerald-400 transition-colors active:scale-95 px-3 py-2 rounded-lg" href="#">İstatistikler</a>
      <a className="text-slate-400 hover:bg-slate-800 hover:text-emerald-400 transition-colors active:scale-95 px-3 py-2 rounded-lg" href="#">Profil</a>
      </div>
      <button className="text-emerald-500 hover:bg-slate-800 hover:text-emerald-400 transition-colors active:scale-95 transition-transform p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="pt-24 pb-32 md:pb-24 px-margin max-w-3xl mx-auto min-h-screen flex flex-col">
      {/* Add Habit Input Form */}
      <div className="w-full bg-surface-container rounded-xl border border-outline-variant p-sm flex items-center gap-sm shadow-sm transition-all focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 mb-xl">
      <div className="p-xs text-on-surface-variant flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px]">add</span>
      </div>
      <input className="flex-1 bg-transparent border-none text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant focus:outline-none focus:ring-0 p-0" placeholder="Yeni alışkanlık ekle..." type="text" />
      <button className="bg-primary text-on-primary font-label-sm text-label-sm px-md py-sm rounded-lg hover:bg-primary-fixed transition-colors active:scale-95 flex items-center gap-xs">
                      Ekle
                  </button>
      </div>
      {/* Empty State Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 animate-fade-in-up mt-[-10vh]">
      {/* Large Faded Icon */}
      <div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mb-lg shadow-inner ring-1 ring-surface-bright border border-outline-variant/30">
      <span className="material-symbols-outlined text-[48px] text-outline-variant opacity-70" data-icon="checklist">checklist</span>
      </div>
      {/* Typography */}
      <h1 className="font-h1 text-h1 text-on-surface mb-xs tracking-tight">
                      Henüz alışkanlık eklemediniz.
                  </h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mx-auto">
                      Yukarıdaki alana yazarak ilk alışkanlığınızı ekleyin.
                  </p>
      </div>
      </main>
      {/* BottomNavBar (Shared Component - Mobile Only) */}
      <nav className="md:hidden bg-slate-900/95 backdrop-blur-md font-inter text-[10px] font-medium fixed bottom-0 left-0 w-full z-50 border-t border-slate-800 shadow-2xl flex justify-around items-center px-4 py-3 h-20">
      {/* Active Tab: Alışkanlıklar */}
      <a className="flex flex-col items-center justify-center text-emerald-500 bg-emerald-500/10 rounded-xl px-3 py-1 hover:text-emerald-400 active:scale-90 transition-all flex-1 mx-1" href="#">
      <span className="material-symbols-outlined mb-1 text-[24px]" data-icon="check_circle">check_circle</span>
      <span>Alışkanlıklar</span>
      </a>
      {/* Inactive Tab: İstatistikler */}
      <a className="flex flex-col items-center justify-center text-slate-500 hover:text-emerald-400 active:scale-90 transition-all flex-1 mx-1" href="#">
      <span className="material-symbols-outlined mb-1 text-[24px]" data-icon="leaderboard">leaderboard</span>
      <span>İstatistikler</span>
      </a>
      {/* Inactive Tab: Profil */}
      <a className="flex flex-col items-center justify-center text-slate-500 hover:text-emerald-400 active:scale-90 transition-all flex-1 mx-1" href="#">
      <span className="material-symbols-outlined mb-1 text-[24px]" data-icon="person">person</span>
      <span>Profil</span>
      </a>
      </nav>
    </>
  );
}
