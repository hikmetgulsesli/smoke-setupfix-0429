import { useCallback, createContext, useContext } from 'react';
import { AnaSayfaDashboard } from './screens/AnaSayfaDashboard';
import { BosDurumEmptyState } from './screens/BosDurumEmptyState';
import { HataDurumuErrorState } from './screens/HataDurumuErrorState';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { Habit } from './types/habit';

export interface HabitState {
  habits: Habit[];
  error: string | null;
  addHabit: (habit: Habit) => void;
  toggleHabit: (id: string) => void;
  deleteHabit: (id: string) => void;
  clearError: () => void;
}

const HabitContext = createContext<HabitState | null>(null);

export function useHabits(): HabitState {
  const ctx = useContext(HabitContext);
  if (!ctx) throw new Error('useHabits must be used within App');
  return ctx;
}

export default function App() {
  const { habits, error, saveHabits, dismissError } = useLocalStorage();

  const addHabit = useCallback((habit: Habit) => {
    saveHabits([...habits, habit]);
  }, [habits, saveHabits]);

  const toggleHabit = useCallback((id: string) => {
    saveHabits(habits.map((h) =>
      h.id === id ? { ...h, completed: !h.completed } : h
    ));
  }, [habits, saveHabits]);

  const deleteHabit = useCallback((id: string) => {
    saveHabits(habits.filter((h) => h.id !== id));
  }, [habits, saveHabits]);

  const hasHabits = habits.length > 0;

  return (
    <HabitContext.Provider
      value={{ habits, error, addHabit, toggleHabit, deleteHabit, clearError: dismissError }}
    >
      <div data-setfarm-root="baseline" className="min-h-screen bg-background text-on-surface">
        {error && !hasHabits && (
          <div className="w-full bg-error-container text-on-error-container px-5 py-3 flex items-start gap-3 border-b border-error sticky top-0 z-[60]" role="alert" aria-live="assertive">
            <span className="material-symbols-outlined mt-0.5 text-error">error</span>
            <div className="flex flex-col flex-1">
              <span className="font-h2 text-h2 text-error">Veriler kaydedilemedi.</span>
              <span className="font-body-md text-body-md text-on-error-container/80">{error}</span>
            </div>
            <button
              type="button"
              onClick={dismissError}
              aria-label="Hatayı kapat"
              className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-fixed transition-colors active:scale-95 cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
            </button>
          </div>
        )}
        {error && hasHabits ? (
          <div data-setfarm-root="error-state">
            <HataDurumuErrorState
              habits={habits}
              onAdd={addHabit}
              onToggle={toggleHabit}
              onDelete={deleteHabit}
              error={error}
              onDismiss={dismissError}
            />
          </div>
        ) : hasHabits ? (
          <AnaSayfaDashboard
            habits={habits}
            onAdd={addHabit}
            onToggle={toggleHabit}
            onDelete={deleteHabit}
          />
        ) : (
          <BosDurumEmptyState onAdd={addHabit} />
        )}
      </div>
    </HabitContext.Provider>
  );
}
