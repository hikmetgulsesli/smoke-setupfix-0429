import { useState, useCallback } from 'react';
import { getHabits, setHabits } from '../utils/storage';
import type { Habit } from '../types/habit';

export function useLocalStorage() {
  const [habits, setHabitsState] = useState<Habit[]>(() => {
    try {
      return getHabits();
    } catch {
      return [];
    }
  });
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(() => {
    try {
      setHabitsState(getHabits());
      setError(null);
    } catch {
      setError('Alışkanlıklar yüklenemedi.');
    }
  }, []);

  const saveHabits = useCallback((newHabits: Habit[]) => {
    try {
      setHabits(newHabits);
      setHabitsState(newHabits);
      setError(null);
    } catch (err) {
      setError('Alışkanlıklar kaydedilemedi. Tarayıcı ayarlarınızı kontrol edin.');
    }
  }, []);

  return { habits, error, refresh, saveHabits };
}
