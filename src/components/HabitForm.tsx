import { useState, type FormEvent } from 'react';
import type { Habit } from '../types/habit';

interface HabitFormProps {
  onAdd: (habit: Habit) => void;
  variant?: 'default' | 'compact';
}

export function HabitForm({ onAdd, variant = 'default' }: HabitFormProps) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) {
      setError('Alışkanlık başlığı boş olamaz.');
      return;
    }
    if (trimmed.length > 100) {
      setError('Alışkanlık başlığı en fazla 100 karakter olabilir.');
      return;
    }
    const habit: Habit = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
      createdAt: Date.now(),
    };
    onAdd(habit);
    setTitle('');
    setError(null);
  };

  if (variant === 'compact') {
    return (
      <form className="w-full bg-surface-container rounded-xl border border-outline-variant p-sm flex items-center gap-sm shadow-sm transition-all focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 mb-xl" onSubmit={handleSubmit}>
        <div className="p-xs text-on-surface-variant flex items-center justify-center">
          <span className="material-symbols-outlined text-[20px]">add</span>
        </div>
        <input
          className="flex-1 bg-transparent border-none text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant focus:outline-none focus:ring-0 p-0"
          placeholder="Yeni alışkanlık ekle..."
          type="text"
          value={title}
          maxLength={100}
          onChange={(e) => {
            setTitle(e.target.value);
            setError(null);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSubmit(e);
          }}
          aria-label="Yeni alışkanlık ekle"
        />
        <button
          className="bg-primary text-on-primary font-label-sm text-label-sm px-md py-sm rounded-lg hover:bg-primary-fixed transition-colors active:scale-95 flex items-center gap-xs cursor-pointer"
          type="submit"
        >
          Ekle
        </button>
        {error && (
          <span className="text-error text-xs ml-2">{error}</span>
        )}
      </form>
    );
  }

  return (
    <section className="col-span-4 md:col-span-12 bg-surface-container rounded-xl p-md border border-outline-variant shadow-lg flex flex-col gap-sm">
      <h2 className="font-h2 text-h2 text-on-surface mb-xs">Yeni Alışkanlık Ekle</h2>
      <form className="flex flex-col md:flex-row gap-sm items-stretch md:items-center w-full" onSubmit={handleSubmit}>
        <div className="relative flex-grow">
          <input
            className="w-full bg-surface-container-high border border-outline-variant text-on-surface rounded-lg px-md py-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-on-surface-variant font-body-md text-body-md"
            placeholder="Örn: Kitap oku, Spor yap..."
            type="text"
            value={title}
            maxLength={100}
            onChange={(e) => {
              setTitle(e.target.value);
              setError(null);
            }}
            aria-label="Yeni alışkanlık başlığı"
          />
          {error && (
            <span className="absolute -bottom-5 left-0 text-error text-xs">{error}</span>
          )}
        </div>
        <button
          className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-lg py-sm rounded-lg hover:bg-primary hover:text-on-primary transition-colors active:scale-[0.98] flex items-center justify-center gap-xs font-semibold whitespace-nowrap shadow-md cursor-pointer"
          type="submit"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Ekle
        </button>
      </form>
    </section>
  );
}
