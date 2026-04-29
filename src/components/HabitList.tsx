import { useMemo } from 'react';
import type { Habit } from '../types/habit';
import { HabitItem } from './HabitItem';

interface HabitListProps {
  habits: Habit[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function HabitList({ habits, onToggle, onDelete }: HabitListProps) {
  const sortedHabits = useMemo(
    () => [...habits].sort((a, b) => b.createdAt - a.createdAt),
    [habits]
  );
  const completedCount = useMemo(
    () => habits.filter((h) => h.completed).length,
    [habits]
  );

  return (
    <section className="col-span-4 md:col-span-12 flex flex-col gap-sm">
      {sortedHabits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
      <div className="mt-md text-center md:text-left">
        <p className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high inline-block px-md py-xs rounded-full border border-outline-variant">
          Toplam {habits.length} Alışkanlık, {completedCount} Tamamlandı
        </p>
      </div>
    </section>
  );
}
