import React from 'react';
import { motion } from 'framer-motion';
import WaterTracker from '../components/tracking/WaterTracker';
import StepCounter from '../components/tracking/StepCounter';
import SleepTracker from '../components/tracking/SleepTracker';
import MoodTracker from '../components/tracking/MoodTracker';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Health Dashboard</h1>
          <p className="text-gray-600 mt-2">Track and monitor your daily wellness metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WaterTracker />
          <StepCounter />
          <SleepTracker />
          <MoodTracker />
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;