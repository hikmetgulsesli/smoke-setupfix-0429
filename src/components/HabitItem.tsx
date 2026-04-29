import { useState } from 'react';
import type { Habit } from '../types/habit';

interface HabitItemProps {
  habit: Habit;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function HabitItem({ habit, onToggle, onDelete }: HabitItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(habit.id);
    }, 250);
  };

  return (
    <div
      className={`bg-surface-container rounded-xl p-md border border-outline-variant flex items-center justify-between group hover:border-outline transition-colors ${
        habit.completed ? '' : 'shadow-sm'
      } ${isDeleting ? 'opacity-0 translate-x-4 transition-all duration-250' : 'opacity-100 translate-x-0'}`}
    >
      <div className={`flex items-center gap-md ${habit.completed ? 'opacity-60' : ''}`}>
        <button
          className={`flex-shrink-0 focus:outline-none active:scale-90 transition-transform cursor-pointer ${
            habit.completed
              ? 'text-primary'
              : 'text-outline-variant hover:text-primary transition-colors'
          }`}
          onClick={() => onToggle(habit.id)}
          aria-label={habit.completed ? 'Tamamlanmadı olarak işaretle' : 'Tamamlandı olarak işaretle'}
        >
          <span
            className="material-symbols-outlined text-[28px]"
            style={{
              fontVariationSettings: habit.completed ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            {habit.completed ? 'check_circle' : 'radio_button_unchecked'}
          </span>
        </button>
        <span
          className={`font-body-lg text-body-lg text-on-surface ${
            habit.completed
              ? 'line-through decoration-on-surface-variant'
              : 'font-medium'
          }`}
        >
          {habit.title}
        </span>
      </div>
      <button
        className="text-error hover:bg-error-container hover:text-on-error-container p-xs rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none cursor-pointer"
        onClick={handleDelete}
        aria-label="Sil"
      >
        <span className="material-symbols-outlined text-[20px]">delete</span>
      </button>
    </div>
  );
}
