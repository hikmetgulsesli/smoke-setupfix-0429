import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HabitList } from './HabitList';
import type { Habit } from '../types/habit';

const mockOnToggle = vi.fn();
const mockOnDelete = vi.fn();

const habits: Habit[] = [
  { id: '1', title: 'Kitap Oku', completed: false, createdAt: 1000 },
  { id: '2', title: 'Spor Yap', completed: true, createdAt: 2000 },
  { id: '3', title: 'Meditasyon', completed: false, createdAt: 3000 },
];

describe('HabitList', () => {
  it('renders all habits sorted by createdAt desc', () => {
    render(<HabitList habits={habits} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    expect(screen.getByText('Meditasyon')).toBeInTheDocument();
    expect(screen.getByText('Spor Yap')).toBeInTheDocument();
    expect(screen.getByText('Kitap Oku')).toBeInTheDocument();
  });

  it('shows summary with total and completed count', () => {
    render(<HabitList habits={habits} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    expect(screen.getByText('Toplam 3 Alışkanlık, 1 Tamamlandı')).toBeInTheDocument();
  });

  it('renders empty list', () => {
    render(<HabitList habits={[]} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    expect(screen.getByText('Toplam 0 Alışkanlık, 0 Tamamlandı')).toBeInTheDocument();
  });
});
