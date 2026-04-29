import { describe, it, expect, beforeEach } from 'vitest';
import { getHabits, setHabits, addHabit, removeHabit, toggleHabit } from './storage';
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
      localStorage.setItem('habits_data', 'not-json');
      expect(getHabits()).toEqual([]);
    });

    it('returns empty array when localStorage has non-array value', () => {
      localStorage.setItem('habits_data', JSON.stringify({ foo: 'bar' }));
      expect(getHabits()).toEqual([]);
    });

    it('returns habits from localStorage', () => {
      const habits = [sampleHabit];
      localStorage.setItem('habits_data', JSON.stringify(habits));
      expect(getHabits()).toEqual(habits);
    });
  });

  describe('setHabits', () => {
    it('writes habits to localStorage', () => {
      setHabits([sampleHabit]);
      const raw = localStorage.getItem('habits_data');
      expect(raw).toBe(JSON.stringify([sampleHabit]));
    });

    it('handles empty array', () => {
      setHabits([]);
      const raw = localStorage.getItem('habits_data');
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
