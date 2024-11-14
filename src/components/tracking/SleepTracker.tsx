import React from 'react';
import { Moon } from 'lucide-react';
import { useHealthStore } from '../../store/healthStore';

const SleepTracker = () => {
  const { sleepHours, updateSleep } = useHealthStore();
  const goal = 8;
  const progress = Math.min((sleepHours / goal) * 100, 100);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Moon className="text-primary" />
          Sleep Tracker
        </h3>
        <span className="text-sm text-gray-600">{sleepHours}h / {goal}h</span>
      </div>

      <div className="w-full h-4 bg-gray-200 rounded-full mb-4">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <input
        type="number"
        value={sleepHours}
        onChange={(e) => updateSleep(Math.max(0, Math.min(24, parseFloat(e.target.value) || 0)))}
        className="input"
        placeholder="Enter sleep hours"
        step="0.5"
      />
    </div>
  );
};

export default SleepTracker;