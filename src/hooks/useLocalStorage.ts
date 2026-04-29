import { useState, useCallback, useRef } from 'react';
import { getHabits, setHabits } from '../utils/storage';
import type { Habit } from '../types/habit';

export function useLocalStorage() {
  const initErrorRef = useRef<string | null>(null);
  const [habits, setHabitsState] = useState<Habit[]>(() => {
    try {
      return getHabits();
    } catch {
      initErrorRef.current = 'Alışkanlıklar yüklenemedi. Tarayıcı ayarlarınızı kontrol edin.';
      return [];
    }
  });
  const [error, setError] = useState<string | null>(() => initErrorRef.current);

  const refresh = useCallback(() => {
    try {
      setHabitsState(getHabits());
      setError(null);
    } catch (err) {
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

  const dismissError = useCallback(() => {
    setError(null);
  }, []);

  return { habits, error, refresh, saveHabits, dismissError };
}
