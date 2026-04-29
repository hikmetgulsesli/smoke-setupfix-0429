import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import * as storage from './utils/storage';

vi.mock('./utils/storage', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./utils/storage')>();
  return {
    ...actual,
    getHabits: vi.fn(),
    setHabits: vi.fn(),
  };
});

const mockedGetHabits = vi.mocked(storage.getHabits);
const mockedSetHabits = vi.mocked(storage.setHabits);

beforeEach(() => {
  localStorage.clear();
  mockedGetHabits.mockReset();
  mockedSetHabits.mockReset();
});

describe('App Integration', () => {
  it('renders empty state when no habits', () => {
    mockedGetHabits.mockReturnValue([]);
    render(<App />);
    expect(screen.getByText('Henüz alışkanlık eklemediniz.')).toBeInTheDocument();
  });

  it('renders dashboard when habits exist', () => {
    mockedGetHabits.mockReturnValue([
      { id: '1', title: 'Kitap Oku', completed: false, createdAt: Date.now() },
    ]);
    render(<App />);
    expect(screen.getByText('Kitap Oku')).toBeInTheDocument();
    expect(screen.getByText('Yeni Alışkanlık Ekle')).toBeInTheDocument();
  });

  it('adds a habit and switches from empty state to dashboard', () => {
    mockedGetHabits.mockReturnValue([]);
    mockedSetHabits.mockImplementation(() => {});
    render(<App />);

    const input = screen.getByLabelText('Yeni alışkanlık ekle');
    const button = screen.getByRole('button', { name: /ekle/i });

    fireEvent.change(input, { target: { value: 'Spor yap' } });
    fireEvent.click(button);

    expect(mockedSetHabits).toHaveBeenCalled();
    const saved = mockedSetHabits.mock.calls[0][0];
    expect(saved).toHaveLength(1);
    expect(saved[0].title).toBe('Spor yap');
  });

  it('toggles a habit', () => {
    const habit = { id: '1', title: 'Meditasyon', completed: false, createdAt: Date.now() };
    mockedGetHabits.mockReturnValue([habit]);
    mockedSetHabits.mockImplementation(() => {});
    render(<App />);

    const toggleBtn = screen.getByLabelText('Tamamlandı olarak işaretle');
    fireEvent.click(toggleBtn);

    expect(mockedSetHabits).toHaveBeenCalled();
    const saved = mockedSetHabits.mock.calls[0][0];
    expect(saved[0].completed).toBe(true);
  });

  it('deletes a habit', async () => {
    const habit = { id: '1', title: 'Yürüyüş', completed: false, createdAt: Date.now() };
    mockedGetHabits.mockReturnValue([habit]);
    mockedSetHabits.mockImplementation(() => {});
    render(<App />);

    const deleteBtn = screen.getByLabelText('Sil');
    fireEvent.click(deleteBtn);

    // Wait for animation
    await new Promise((r) => setTimeout(r, 300));

    expect(mockedSetHabits).toHaveBeenCalled();
    const saved = mockedSetHabits.mock.calls[0][0];
    expect(saved).toHaveLength(0);
  });

  it('shows error banner when storage fails', () => {
    mockedGetHabits.mockImplementation(() => {
      throw new Error('Storage quota exceeded');
    });
    render(<App />);
    expect(screen.getByText('Alışkanlıklar yüklenemedi. Tarayıcı ayarlarınızı kontrol edin.')).toBeInTheDocument();
  });

  it('dismisses error banner when check button clicked', () => {
    mockedGetHabits.mockImplementation(() => {
      throw new Error('Storage quota exceeded');
    });
    render(<App />);

    const dismissBtn = screen.getByLabelText('Hatayı kapat');
    fireEvent.click(dismissBtn);

    expect(screen.queryByText('Alışkanlıklar yüklenemedi. Tarayıcı ayarlarınızı kontrol edin.')).not.toBeInTheDocument();
  });

  it('renders HataDurumuErrorState when error and habits exist', () => {
    mockedGetHabits.mockReturnValue([
      { id: '1', title: 'Su İç', completed: false, createdAt: Date.now() },
    ]);
    mockedSetHabits.mockImplementation(() => {
      throw new Error('Quota exceeded');
    });
    render(<App />);

    // Trigger a save by toggling
    const toggleBtn = screen.getByLabelText('Tamamlandı olarak işaretle');
    fireEvent.click(toggleBtn);

    expect(screen.getByText('Veriler kaydedilemedi.')).toBeInTheDocument();
    expect(screen.getByText('Su İç')).toBeInTheDocument();
  });
});
