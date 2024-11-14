import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface HealthStore {
  waterIntake: number;
  steps: number;
  sleepHours: number;
  mood: string;
  addWater: (amount: number) => void;
  updateSteps: (steps: number) => void;
  updateSleep: (hours: number) => void;
  updateMood: (mood: string) => void;
  resetDaily: () => void;
}

export const useHealthStore = create<HealthStore>()(
  persist(
    (set) => ({
      waterIntake: 0,
      steps: 0,
      sleepHours: 0,
      mood: 'neutral',
      addWater: (amount) =>
        set((state) => ({ waterIntake: state.waterIntake + amount })),
      updateSteps: (steps) => set({ steps }),
      updateSleep: (hours) => set({ sleepHours: hours }),
      updateMood: (mood) => set({ mood }),
      resetDaily: () => set({ waterIntake: 0, steps: 0, sleepHours: 0 }),
    }),
    {
      name: 'health-store',
    }
  )
);