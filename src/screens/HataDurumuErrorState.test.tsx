import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HataDurumuErrorState } from './HataDurumuErrorState';
import type { Habit } from '../types/habit';

const mockOnAdd = vi.fn();
const mockOnToggle = vi.fn();
const mockOnDelete = vi.fn();
const mockOnDismiss = vi.fn();

const habits: Habit[] = [
  { id: '1', title: 'Su İç', completed: true, createdAt: 1000 },
  { id: '2', title: 'Kitap Oku', completed: false, createdAt: 2000 },
];

describe('HataDurumuErrorState', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders error banner with message', () => {
    render(
      <HataDurumuErrorState
        habits={habits}
        onAdd={mockOnAdd}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
        error="Tarayıcı ayarlarınızı kontrol edin."
        onDismiss={mockOnDismiss}
      />
    );

    expect(screen.getByText('Veriler kaydedilemedi.')).toBeInTheDocument();
    expect(screen.getByText('Tarayıcı ayarlarınızı kontrol edin.')).toBeInTheDocument();
  });

  it('renders habits list dimmed', () => {
    render(
      <HataDurumuErrorState
        habits={habits}
        onAdd={mockOnAdd}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
        error="Kaydetme hatası"
        onDismiss={mockOnDismiss}
      />
    );

    expect(screen.getByText('Su İç')).toBeInTheDocument();
    expect(screen.getByText('Kitap Oku')).toBeInTheDocument();
  });

  it('calls onDismiss when check button clicked', () => {
    render(
      <HataDurumuErrorState
        habits={habits}
        onAdd={mockOnAdd}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
        error="Kaydetme hatası"
        onDismiss={mockOnDismiss}
      />
    );

    const dismissBtn = screen.getByLabelText('Hatayı kapat');
    fireEvent.click(dismissBtn);
    expect(mockOnDismiss).toHaveBeenCalledTimes(1);
  });

  it('renders app header with title', () => {
    render(
      <HataDurumuErrorState
        habits={habits}
        onAdd={mockOnAdd}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
        error="Kaydetme hatası"
        onDismiss={mockOnDismiss}
      />
    );

    expect(screen.getByText('Alışkanlık Takipçisi')).toBeInTheDocument();
  });

  it('renders current date', () => {
    render(
      <HataDurumuErrorState
        habits={habits}
        onAdd={mockOnAdd}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
        error="Kaydetme hatası"
        onDismiss={mockOnDismiss}
      />
    );

    const today = new Date().toLocaleDateString('tr-TR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
    expect(screen.getByText(today)).toBeInTheDocument();
  });
});
