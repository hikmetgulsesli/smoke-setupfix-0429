import { describe, it, expect, beforeEach } from 'vitest';
import { getHabits, setHabits, addHabit, removeHabit, toggleHabit, STORAGE_KEY } from './storage';
import type { Habit } from '../types/habit';

const sampleHabit: Habit = {
  id: '1',
  title: 'Günlük 2 Litre Su İç',
  completed: false,
  createdAt: Date.now(),
};

const sampleHabit2: Habit = {
  id: '2',
  title: '30 Dakika Yürüyüş',
  completed: true,
  createdAt: Date.now(),
};

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('getHabits', () => {
    it('returns empty array when localStorage is empty', () => {
      expect(getHabits()).toEqual([]);
    });

    it('returns empty array when localStorage has invalid JSON', () => {
      localStorage.setItem(STORAGE_KEY, 'not-json');
      expect(getHabits()).toEqual([]);
    });

    it('returns empty array when localStorage has non-array value', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ foo: 'bar' }));
      expect(getHabits()).toEqual([]);
    });

    it('returns habits from localStorage', () => {
      const habits = [sampleHabit];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
      expect(getHabits()).toEqual(habits);
    });

    it('filters out malformed habit entries', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([
        sampleHabit,
        { foo: 'bar' },
        null,
        { id: 'bad', title: 123 },
        sampleHabit2,
      ]));
      const result = getHabits();
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe('1');
      expect(result[1].id).toBe('2');
    });
  });

  describe('setHabits', () => {
    it('writes habits to localStorage', () => {
      setHabits([sampleHabit]);
      const raw = localStorage.getItem(STORAGE_KEY);
      expect(raw).toBe(JSON.stringify([sampleHabit]));
    });

    it('handles empty array', () => {
      setHabits([]);
      const raw = localStorage.getItem(STORAGE_KEY);
      expect(raw).toBe('[]');
    });
  });

  describe('addHabit', () => {
    it('adds a habit to empty list', () => {
      addHabit(sampleHabit);
      expect(getHabits()).toEqual([sampleHabit]);
    });

    it('appends a habit to existing list', () => {
      addHabit(sampleHabit);
      addHabit(sampleHabit2);
      expect(getHabits()).toEqual([sampleHabit, sampleHabit2]);
    });
  });

  describe('removeHabit', () => {
    it('removes a habit by id', () => {
      setHabits([sampleHabit, sampleHabit2]);
      removeHabit('1');
      expect(getHabits()).toEqual([sampleHabit2]);
    });

    it('does nothing when id not found', () => {
      setHabits([sampleHabit]);
      removeHabit('999');
      expect(getHabits()).toEqual([sampleHabit]);
    });
  });

  describe('toggleHabit', () => {
    it('toggles completed status', () => {
      setHabits([sampleHabit]);
      toggleHabit('1');
      const habits = getHabits();
      expect(habits[0].completed).toBe(true);
    });

    it('toggles back to false', () => {
      setHabits([sampleHabit2]);
      toggleHabit('2');
      const habits = getHabits();
      expect(habits[0].completed).toBe(false);
    });

    it('does nothing when id not found', () => {
      setHabits([sampleHabit]);
      toggleHabit('999');
      expect(getHabits()).toEqual([sampleHabit]);
    });
  });
});
