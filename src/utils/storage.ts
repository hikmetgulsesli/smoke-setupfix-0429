import type { Habit } from '../types/habit';

const STORAGE_KEY = 'habits_data';

export function getHabits(): Habit[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function setHabits(habits: Habit[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  } catch {
    // localStorage write failed (quota exceeded or disabled)
  }
}

export function addHabit(habit: Habit): void {
  const habits = getHabits();
  habits.push(habit);
  setHabits(habits);
}

export function removeHabit(id: string): void {
  const habits = getHabits();
  const filtered = habits.filter((h) => h.id !== id);
  setHabits(filtered);
}

export function toggleHabit(id: string): void {
  const habits = getHabits();
  const updated = habits.map((h) =>
    h.id === id ? { ...h, completed: !h.completed } : h
  );
  setHabits(updated);
}
