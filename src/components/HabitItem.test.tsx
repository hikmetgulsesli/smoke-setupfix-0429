import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HabitItem } from './HabitItem';
import type { Habit } from '../types/habit';

const mockOnToggle = vi.fn();
const mockOnDelete = vi.fn();

const sampleHabit: Habit = {
  id: '1',
  title: 'Günlük 2 Litre Su İç',
  completed: false,
  createdAt: Date.now(),
};

const completedHabit: Habit = {
  id: '2',
  title: '30 Dakika Yürüyüş',
  completed: true,
  createdAt: Date.now(),
};

describe('HabitItem', () => {
  it('renders habit title', () => {
    render(<HabitItem habit={sampleHabit} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    expect(screen.getByText('Günlük 2 Litre Su İç')).toBeInTheDocument();
  });

  it('calls onToggle when checkbox clicked', () => {
    render(<HabitItem habit={sampleHabit} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    const toggleBtn = screen.getByLabelText('Tamamlandı olarak işaretle');
    fireEvent.click(toggleBtn);
    expect(mockOnToggle).toHaveBeenCalledWith('1');
  });

  it('calls onDelete when delete button clicked', async () => {
    render(<HabitItem habit={sampleHabit} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    const deleteBtn = screen.getByLabelText('Sil');
    fireEvent.click(deleteBtn);
    await waitFor(() => expect(mockOnDelete).toHaveBeenCalledWith('1'), { timeout: 500 });
  });

  it('shows completed state with check_circle icon', () => {
    render(<HabitItem habit={completedHabit} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    expect(screen.getByText('30 Dakika Yürüyüş')).toHaveClass('line-through');
    expect(screen.getByLabelText('Tamamlanmadı olarak işaretle')).toBeInTheDocument();
  });

  it('shows uncompleted state with radio_button_unchecked icon', () => {
    render(<HabitItem habit={sampleHabit} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    expect(screen.getByLabelText('Tamamlandı olarak işaretle')).toBeInTheDocument();
  });
});
