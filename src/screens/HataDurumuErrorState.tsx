// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Durumu (Error State)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HataDurumuErrorStateProps {}

export function HataDurumuErrorState(props: HataDurumuErrorStateProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface surface-container-high docked full-width top-0 z-40 border-b border-outline-variant flat no shadows font-inter text-sm antialiased flex justify-between items-center px-5 h-16 w-full mx-auto">
      <div className="text-xl font-bold text-primary tracking-tight font-display text-display flex items-center gap-2">
                  Alışkanlık Takipçisi
              </div>
      <div className="hidden md:flex gap-6">
      <a className="text-primary font-semibold hover:bg-surface-variant hover:text-primary-fixed transition-colors active:scale-95 px-3 py-2 rounded-lg flex items-center gap-2" href="#">
      <span className="material-symbols-outlined" data-icon="check_circle" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      Alışkanlıklar
                  </a>
      <a className="text-on-surface hover:bg-surface-variant hover:text-primary-fixed transition-colors active:scale-95 px-3 py-2 rounded-lg flex items-center gap-2" href="#">
      <span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
                      İstatistikler
                  </a>
      <a className="text-on-surface hover:bg-surface-variant hover:text-primary-fixed transition-colors active:scale-95 px-3 py-2 rounded-lg flex items-center gap-2" href="#">
      <span className="material-symbols-outlined" data-icon="person">person</span>
                      Profil
                  </a>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-on-surface hover:bg-surface-variant hover:text-primary transition-colors p-2 rounded-full active:scale-95">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </header>
      {/* Error Banner */}
      <div className="w-full bg-error-container text-on-error-container px-5 py-3 flex items-start gap-3 border-b border-error sticky top-16 z-30">
      <span className="material-symbols-outlined mt-0.5 text-error" data-icon="error">error</span>
      <div className="flex flex-col">
      <span className="font-h2 text-h2 text-error">Veriler kaydedilemedi.</span>
      <span className="font-body-md text-body-md text-on-error-container/80">Tarayıcı ayarlarınızı kontrol edin veya daha sonra tekrar deneyin.</span>
      </div>
      </div>
      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-5 py-8 md:py-12 flex flex-col gap-8 opacity-80 pointer-events-none">
      <section className="flex flex-col gap-4">
      <div className="flex justify-between items-end">
      <div>
      <h1 className="font-display text-display text-on-surface">Bugün</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">12 Ekim Çarşamba</p>
      </div>
      </div>
      {/* Bento Grid Layout for Habits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {/* Completed Habit Card */}
      <div className="bg-surface-container rounded-xl p-5 border border-outline-variant flex flex-col justify-between h-40 relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start z-10">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined" data-icon="water_drop">water_drop</span>
      </div>
      <span className="font-h2 text-h2 text-on-surface">Su İç</span>
      </div>
      <button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="check" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
      </button>
      </div>
      <div className="z-10 mt-4">
      <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-2">
      <span>8/8 Bardak</span>
      <span className="text-primary">Tamamlandı</span>
      </div>
      <div className="w-full bg-surface-variant rounded-full h-1.5 overflow-hidden">
      <div className="bg-primary h-full w-full rounded-full"></div>
      </div>
      </div>
      </div>
      {/* Uncompleted Habit Card */}
      <div className="bg-surface-container rounded-xl p-5 border border-outline-variant flex flex-col justify-between h-40 relative overflow-hidden group">
      <div className="absolute inset-0 bg-surface-variant/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start z-10">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
      </div>
      <span className="font-h2 text-h2 text-on-surface">Kitap Oku</span>
      </div>
      <button className="w-8 h-8 rounded-full border border-outline text-outline hover:border-primary hover:text-primary flex items-center justify-center transition-colors">
      </button>
      </div>
      <div className="z-10 mt-4">
      <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-2">
      <span>0/30 Sayfa</span>
      <span>Başlamadı</span>
      </div>
      <div className="w-full bg-surface-variant rounded-full h-1.5 overflow-hidden">
      <div className="bg-primary h-full w-0 rounded-full transition-all duration-500"></div>
      </div>
      </div>
      </div>
      {/* Partial Habit Card */}
      <div className="bg-surface-container rounded-xl p-5 border border-outline-variant flex flex-col justify-between h-40 relative overflow-hidden group">
      <div className="absolute inset-0 bg-surface-variant/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start z-10">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
      </div>
      <span className="font-h2 text-h2 text-on-surface">Egzersiz</span>
      </div>
      <button className="w-8 h-8 rounded-full border border-outline text-outline hover:border-primary hover:text-primary flex items-center justify-center transition-colors">
      </button>
      </div>
      <div className="z-10 mt-4">
      <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-2">
      <span>15/45 Dk</span>
      <span>Devam Ediyor</span>
      </div>
      <div className="w-full bg-surface-variant rounded-full h-1.5 overflow-hidden">
      <div className="bg-primary h-full w-1/3 rounded-full transition-all duration-500"></div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="mt-8 bg-surface-container rounded-xl p-6 border border-outline-variant">
      <h2 className="font-h1 text-h1 text-on-surface mb-6 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary" data-icon="local_fire_department">local_fire_department</span>
                      Aktivite Serisi
                  </h2>
      <div className="grid grid-cols-7 gap-2 md:gap-4">
      {/* Days labels */}
      <div className="text-center font-label-sm text-label-sm text-on-surface-variant mb-2">Pzt</div>
      <div className="text-center font-label-sm text-label-sm text-on-surface-variant mb-2">Sal</div>
      <div className="text-center font-label-sm text-label-sm text-on-surface-variant mb-2">Çar</div>
      <div className="text-center font-label-sm text-label-sm text-on-surface-variant mb-2">Per</div>
      <div className="text-center font-label-sm text-label-sm text-on-surface-variant mb-2">Cum</div>
      <div className="text-center font-label-sm text-label-sm text-on-surface-variant mb-2">Cmt</div>
      <div className="text-center font-label-sm text-label-sm text-on-surface-variant mb-2">Paz</div>
      {/* Streak squares */}
      <div className="aspect-square bg-primary/20 border border-primary/30 rounded flex items-center justify-center"></div>
      <div className="aspect-square bg-primary/40 border border-primary/50 rounded flex items-center justify-center"></div>
      <div className="aspect-square bg-primary border border-primary rounded flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)]"><span className="material-symbols-outlined text-[16px] text-on-primary" data-icon="check" style={{fontVariationSettings: "'FILL' 1"}}>check</span></div>
      <div className="aspect-square bg-surface-variant border border-outline-variant rounded flex items-center justify-center"></div>
      <div className="aspect-square bg-surface-variant border border-outline-variant rounded flex items-center justify-center"></div>
      <div className="aspect-square bg-surface-variant border border-outline-variant rounded flex items-center justify-center"></div>
      <div className="aspect-square bg-surface-variant border border-outline-variant rounded flex items-center justify-center"></div>
      </div>
      </section>
      </main>
      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden bg-surface/95 backdrop-blur-md font-inter text-[10px] font-medium text-primary fixed bottom-0 w-full z-50 border-t border-outline-variant shadow-2xl flex justify-around items-center px-4 py-3 h-20 left-0">
      <a className="flex flex-col items-center justify-center text-primary bg-primary/10 rounded-xl px-3 py-1 hover:text-primary-fixed active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="check_circle" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span>Alışkanlıklar</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary-fixed active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="leaderboard">leaderboard</span>
      <span>İstatistikler</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary-fixed active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="person">person</span>
      <span>Profil</span>
      </a>
      </nav>
    </>
  );
}
