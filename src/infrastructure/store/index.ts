import { create } from 'zustand';
import type { User, Squad } from '../types';

interface AppState {
  user: User | null;
  setUser: (user: User | null) => void;
  squad: Squad | null;
  setSquad: (squad: Squad | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  squad: null,
  setSquad: (squad) => set({ squad }),
}));

