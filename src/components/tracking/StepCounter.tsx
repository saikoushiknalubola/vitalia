import React from 'react';
import { Footprints } from 'lucide-react';
import { useHealthStore } from '../../store/healthStore';

const StepCounter = () => {
  const { steps, updateSteps } = useHealthStore();
  const goal = 10000;
  const progress = Math.min((steps / goal) * 100, 100);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Footprints className="text-primary" />
          Step Counter
        </h3>
        <span className="text-sm text-gray-600">{steps} / {goal} steps</span>
      </div>

      <div className="w-full h-4 bg-gray-200 rounded-full mb-4">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <input
        type="number"
        value={steps}
        onChange={(e) => updateSteps(Math.max(0, parseInt(e.target.value) || 0))}
        className="input"
        placeholder="Enter steps"
      />
    </div>
  );
};

export default StepCounter;