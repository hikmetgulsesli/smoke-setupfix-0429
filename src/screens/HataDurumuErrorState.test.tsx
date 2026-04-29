import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HataDurumuErrorState } from './HataDurumuErrorState';
import type { Habit } from '../types/habit';

const mockOnAdd = vi.fn();
const mockOnToggle = vi.fn();
const mockOnDelete = vi.fn();
const mockOnDismiss = vi.fn();

const habits: Habit[] = [
  { id: '1', title: 'Kitap Oku', completed: false, createdAt: 1000 },
  { id: '2', title: 'Spor Yap', completed: true, createdAt: 2000 },
];

describe('HataDurumuErrorState', () => {
  it('renders error banner with message', () => {
    render(
      <HataDurumuErrorState
        habits={habits}
        onAdd={mockOnAdd}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
        error="Depolama alanı dolu."
        onDismiss={mockOnDismiss}
      />
    );
    expect(screen.getByText('Veriler kaydedilemedi.')).toBeInTheDocument();
    expect(screen.getByText('Depolama alanı dolu.')).toBeInTheDocument();
  });

  it('renders habits list', () => {
    render(
      <HataDurumuErrorState
        habits={habits}
        onAdd={mockOnAdd}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
        error="Hata"
        onDismiss={mockOnDismiss}
      />
    );
    expect(screen.getByText('Kitap Oku')).toBeInTheDocument();
    expect(screen.getByText('Spor Yap')).toBeInTheDocument();
  });

  it('calls onDismiss when check button clicked', () => {
    render(
      <HataDurumuErrorState
        habits={habits}
        onAdd={mockOnAdd}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
        error="Hata"
        onDismiss={mockOnDismiss}
      />
    );
    const dismissBtn = screen.getByLabelText('Hatayı kapat');
    fireEvent.click(dismissBtn);
    expect(mockOnDismiss).toHaveBeenCalled();
  });

  it('renders header with app title', () => {
    render(
      <HataDurumuErrorState
        habits={habits}
        onAdd={mockOnAdd}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
        error="Hata"
        onDismiss={mockOnDismiss}
      />
    );
    expect(screen.getByText('Alışkanlık Takipçisi')).toBeInTheDocument();
  });

  it('has aria-label on dismiss button', () => {
    render(
      <HataDurumuErrorState
        habits={habits}
        onAdd={mockOnAdd}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
        error="Hata"
        onDismiss={mockOnDismiss}
      />
    );
    expect(screen.getByLabelText('Hatayı kapat')).toBeInTheDocument();
  });
});
