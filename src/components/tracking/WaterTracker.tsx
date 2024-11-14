import React from 'react';
import { Droplets, Plus, Minus } from 'lucide-react';
import { useHealthStore } from '../../store/healthStore';

const WaterTracker = () => {
  const { waterIntake, addWater } = useHealthStore();
  const goal = 2000; // 2L daily goal
  const progress = Math.min((waterIntake / goal) * 100, 100);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Droplets className="text-primary" />
          Water Intake
        </h3>
        <span className="text-sm text-gray-600">{waterIntake}ml / {goal}ml</span>
      </div>

      <div className="w-full h-4 bg-gray-200 rounded-full mb-4">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => addWater(-250)}
          className="btn bg-gray-100 hover:bg-gray-200 p-2"
          disabled={waterIntake <= 0}
        >
          <Minus className="w-5 h-5" />
        </button>
        <button
          onClick={() => addWater(250)}
          className="btn btn-primary p-2"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default WaterTracker;