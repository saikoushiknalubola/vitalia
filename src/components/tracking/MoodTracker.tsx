import React from 'react';
import { Brain } from 'lucide-react';
import { useHealthStore } from '../../store/healthStore';

const moods = [
  { value: 'great', emoji: '😄', label: 'Great' },
  { value: 'good', emoji: '🙂', label: 'Good' },
  { value: 'neutral', emoji: '😐', label: 'Neutral' },
  { value: 'bad', emoji: '😕', label: 'Bad' },
  { value: 'terrible', emoji: '😢', label: 'Terrible' },
];

const MoodTracker = () => {
  const { mood, updateMood } = useHealthStore();

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Brain className="text-primary" />
          Mood Tracker
        </h3>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {moods.map((m) => (
          <button
            key={m.value}
            onClick={() => updateMood(m.value)}
            className={`flex flex-col items-center p-2 rounded-lg transition-all ${
              mood === m.value
                ? 'bg-primary/10 text-primary'
                : 'hover:bg-gray-100'
            }`}
          >
            <span className="text-2xl">{m.emoji}</span>
            <span className="text-sm mt-1">{m.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;