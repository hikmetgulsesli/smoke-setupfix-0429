import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HabitForm } from './HabitForm';

const mockOnAdd = vi.fn();

beforeEach(() => {
  mockOnAdd.mockClear();
});

describe('HabitForm', () => {
  it('renders default variant', () => {
    render(<HabitForm onAdd={mockOnAdd} />);
    expect(screen.getByText('Yeni Alışkanlık Ekle')).toBeInTheDocument();
    expect(screen.getByLabelText('Yeni alışkanlık başlığı')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ekle/i })).toBeInTheDocument();
  });

  it('renders compact variant', () => {
    render(<HabitForm onAdd={mockOnAdd} variant="compact" />);
    expect(screen.getByLabelText('Yeni alışkanlık ekle')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ekle/i })).toBeInTheDocument();
  });

  it('adds a habit on form submit', () => {
    render(<HabitForm onAdd={mockOnAdd} />);
    const input = screen.getByLabelText('Yeni alışkanlık başlığı');
    const button = screen.getByRole('button', { name: /ekle/i });

    fireEvent.change(input, { target: { value: 'Kitap oku' } });
    fireEvent.click(button);

    expect(mockOnAdd).toHaveBeenCalledOnce();
    const habit = mockOnAdd.mock.calls[0][0];
    expect(habit.title).toBe('Kitap oku');
    expect(habit.completed).toBe(false);
    expect(typeof habit.id).toBe('string');
    expect(typeof habit.createdAt).toBe('number');
  });

  it('trims whitespace from input', () => {
    render(<HabitForm onAdd={mockOnAdd} />);
    const input = screen.getByLabelText('Yeni alışkanlık başlığı');
    const button = screen.getByRole('button', { name: /ekle/i });

    fireEvent.change(input, { target: { value: '  Kitap oku  ' } });
    fireEvent.click(button);

    expect(mockOnAdd).toHaveBeenCalledOnce();
    expect(mockOnAdd.mock.calls[0][0].title).toBe('Kitap oku');
  });

  it('shows error for empty input', () => {
    render(<HabitForm onAdd={mockOnAdd} />);
    const button = screen.getByRole('button', { name: /ekle/i });

    fireEvent.click(button);

    expect(mockOnAdd).not.toHaveBeenCalled();
    expect(screen.getByText('Alışkanlık başlığı boş olamaz.')).toBeInTheDocument();
  });

  it('shows error for input over 100 characters', () => {
    render(<HabitForm onAdd={mockOnAdd} />);
    const input = screen.getByLabelText('Yeni alışkanlık başlığı');
    const button = screen.getByRole('button', { name: /ekle/i });

    fireEvent.change(input, { target: { value: 'a'.repeat(101) } });
    fireEvent.click(button);

    expect(mockOnAdd).not.toHaveBeenCalled();
    expect(screen.getByText('Alışkanlık başlığı en fazla 100 karakter olabilir.')).toBeInTheDocument();
  });

  it('clears input after adding', () => {
    render(<HabitForm onAdd={mockOnAdd} />);
    const input = screen.getByLabelText('Yeni alışkanlık başlığı') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Spor yap' } });
    fireEvent.click(screen.getByRole('button', { name: /ekle/i }));

    expect(input.value).toBe('');
  });

  it('submits on Enter key in compact variant', () => {
    render(<HabitForm onAdd={mockOnAdd} variant="compact" />);
    const input = screen.getByLabelText('Yeni alışkanlık ekle');

    fireEvent.change(input, { target: { value: 'Meditasyon' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockOnAdd).toHaveBeenCalledOnce();
    expect(mockOnAdd.mock.calls[0][0].title).toBe('Meditasyon');
  });
});
