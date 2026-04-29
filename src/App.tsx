import { useCallback } from 'react';
import { AnaSayfaDashboard } from './screens/AnaSayfaDashboard';
import { BosDurumEmptyState } from './screens/BosDurumEmptyState';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { Habit } from './types/habit';

export default function App() {
  const { habits, error, saveHabits } = useLocalStorage();

  const handleAdd = useCallback((habit: Habit) => {
    saveHabits([...habits, habit]);
  }, [habits, saveHabits]);

  const handleToggle = useCallback((id: string) => {
    saveHabits(habits.map((h) =>
      h.id === id ? { ...h, completed: !h.completed } : h
    ));
  }, [habits, saveHabits]);

  const handleDelete = useCallback((id: string) => {
    saveHabits(habits.filter((h) => h.id !== id));
  }, [habits, saveHabits]);

  const hasHabits = habits.length > 0;

  return (
    <div data-setfarm-root="baseline" className="min-h-screen bg-background text-on-surface">
      {error && (
        <div className="w-full bg-error-container text-on-error-container px-5 py-3 flex items-start gap-3 border-b border-error sticky top-0 z-[60]">
          <span className="material-symbols-outlined mt-0.5 text-error">error</span>
          <div className="flex flex-col">
            <span className="font-h2 text-h2 text-error">Veriler kaydedilemedi.</span>
            <span className="font-body-md text-body-md text-on-error-container/80">{error}</span>
          </div>
        </div>
      )}
      {hasHabits ? (
        <AnaSayfaDashboard
          habits={habits}
          onAdd={handleAdd}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ) : (
        <BosDurumEmptyState onAdd={handleAdd} />
      )}
    </div>
  );
}
