// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa (Dashboard)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaDashboardProps {}

export function AnaSayfaDashboard(props: AnaSayfaDashboardProps) {
  return (
    <>
      {/* TopNavBar Web */}
      <header className="hidden md:flex bg-slate-900 flex-col font-inter text-sm antialiased docked full-width top-0 border-b border-b border-slate-800 flat no shadows flex justify-between items-center px-5 h-16 w-full max-w-7xl mx-auto sticky z-50">
      <div className="flex items-center justify-between w-full h-full">
      <h1 className="text-xl font-bold text-emerald-500 tracking-tight">Alışkanlık Takipçisi</h1>
      <nav className="flex items-center gap-md">
      <a className="text-emerald-500 font-semibold active:scale-95 transition-transform flex items-center gap-xs" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                          Alışkanlıklar
                      </a>
      <a className="text-slate-400 hover:bg-slate-800 hover:text-emerald-400 transition-colors active:scale-95 transition-transform px-sm py-xs rounded-DEFAULT flex items-center gap-xs" href="#">
      <span className="material-symbols-outlined">leaderboard</span>
                          İstatistikler
                      </a>
      <a className="text-slate-400 hover:bg-slate-800 hover:text-emerald-400 transition-colors active:scale-95 transition-transform px-sm py-xs rounded-DEFAULT flex items-center gap-xs" href="#">
      <span className="material-symbols-outlined">person</span>
                          Profil
                      </a>
      <button aria-label="settings" className="text-slate-400 hover:bg-slate-800 hover:text-emerald-400 transition-colors p-sm rounded-full ml-sm active:scale-95 transition-transform">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </nav>
      </div>
      </header>
      {/* TopNavBar Mobile */}
      <header className="md:hidden bg-slate-900 font-inter text-sm antialiased flex justify-between items-center px-5 h-16 w-full sticky top-0 z-40 border-b border-slate-800 shadow-sm">
      <h1 className="text-xl font-bold text-emerald-500 tracking-tight">Alışkanlık Takipçisi</h1>
      <button aria-label="settings" className="text-slate-400 hover:bg-slate-800 hover:text-emerald-400 transition-colors p-sm rounded-full active:scale-95 transition-transform">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </header>
      <main className="max-w-7xl mx-auto p-margin md:p-lg grid grid-cols-4 md:grid-cols-12 gap-lg">
      {/* Add Habit Section */}
      <section className="col-span-4 md:col-span-12 bg-surface-container rounded-xl p-md border border-outline-variant shadow-lg flex flex-col gap-sm">
      <h2 className="font-h2 text-h2 text-on-surface mb-xs">Yeni Alışkanlık Ekle</h2>
      <form className="flex flex-col md:flex-row gap-sm items-stretch md:items-center w-full">
      <div className="relative flex-grow">
      <input className="w-full bg-surface-container-high border border-outline-variant text-on-surface rounded-lg px-md py-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-on-surface-variant font-body-md text-body-md" placeholder="Örn: Kitap oku, Spor yap..." type="text" />
      </div>
      <button className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-lg py-sm rounded-lg hover:bg-primary hover:text-on-primary transition-colors active:scale-[0.98] flex items-center justify-center gap-xs font-semibold whitespace-nowrap shadow-md" type="button">
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Ekle
                      </button>
      </form>
      </section>
      {/* Habit List Section */}
      <section className="col-span-4 md:col-span-12 flex flex-col gap-sm">
      {/* Completed Habit */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant flex items-center justify-between group hover:border-outline transition-colors">
      <div className="flex items-center gap-md opacity-60">
      <button className="text-primary flex-shrink-0 focus:outline-none active:scale-90 transition-transform">
      <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      </button>
      <span className="font-body-lg text-body-lg text-on-surface line-through decoration-on-surface-variant">Günlük 2 Litre Su İç</span>
      </div>
      <button aria-label="Sil" className="text-error hover:bg-error-container hover:text-on-error-container p-xs rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none">
      <span className="material-symbols-outlined text-[20px]">delete</span>
      </button>
      </div>
      {/* Uncompleted Habit */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant flex items-center justify-between group hover:border-outline transition-colors shadow-sm">
      <div className="flex items-center gap-md">
      <button className="text-outline-variant hover:text-primary transition-colors flex-shrink-0 focus:outline-none active:scale-90 transition-transform">
      <span className="material-symbols-outlined text-[28px]">radio_button_unchecked</span>
      </button>
      <span className="font-body-lg text-body-lg text-on-surface font-medium">30 Dakika Yürüyüş</span>
      </div>
      <button aria-label="Sil" className="text-error hover:bg-error-container hover:text-on-error-container p-xs rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none">
      <span className="material-symbols-outlined text-[20px]">delete</span>
      </button>
      </div>
      {/* Uncompleted Habit (Dummy 3) */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant flex items-center justify-between group hover:border-outline transition-colors shadow-sm">
      <div className="flex items-center gap-md">
      <button className="text-outline-variant hover:text-primary transition-colors flex-shrink-0 focus:outline-none active:scale-90 transition-transform">
      <span className="material-symbols-outlined text-[28px]">radio_button_unchecked</span>
      </button>
      <span className="font-body-lg text-body-lg text-on-surface font-medium">Meditasyon Yap (10dk)</span>
      </div>
      <button aria-label="Sil" className="text-error hover:bg-error-container hover:text-on-error-container p-xs rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none">
      <span className="material-symbols-outlined text-[20px]">delete</span>
      </button>
      </div>
      {/* Summary Footer */}
      <div className="mt-md text-center md:text-left">
      <p className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high inline-block px-md py-xs rounded-full border border-outline-variant">
                          Toplam 3 Alışkanlık, 1 Tamamlandı
                      </p>
      </div>
      </section>
      </main>
      {/* BottomNavBar Mobile */}
      <nav className="md:hidden bg-slate-900/95 backdrop-blur-md font-inter text-[10px] font-medium fixed bottom-0 w-full z-50 border-t border-t border-slate-800 shadow-2xl fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 h-20">
      <a className="flex flex-col items-center justify-center text-emerald-500 bg-emerald-500/10 rounded-xl px-3 py-1 active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span>Alışkanlıklar</span>
      </a>
      <a className="flex flex-col items-center justify-center text-slate-500 hover:text-emerald-400 active:scale-90 transition-all px-3 py-1" href="#">
      <span className="material-symbols-outlined mb-1">leaderboard</span>
      <span>İstatistikler</span>
      </a>
      <a className="flex flex-col items-center justify-center text-slate-500 hover:text-emerald-400 active:scale-90 transition-all px-3 py-1" href="#">
      <span className="material-symbols-outlined mb-1">person</span>
      <span>Profil</span>
      </a>
      </nav>
    </>
  );
}
