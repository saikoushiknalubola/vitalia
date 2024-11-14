import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Droplets, Footprints, Moon, Brain, Sparkles, Bot, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Droplets,
    title: 'Water Intake Tracker',
    description: 'Monitor your daily hydration with smart reminders and insights.',
  },
  {
    icon: Footprints,
    title: 'Step Counter',
    description: 'Track your daily movement and reach your fitness goals.',
  },
  {
    icon: Moon,
    title: 'Sleep Tracker',
    description: 'Analyze your sleep patterns for better rest and recovery.',
  },
  {
    icon: Brain,
    title: 'Mood Tracker',
    description: 'Log and understand your emotional well-being.',
  },
  {
    icon: Activity,
    title: 'Digital Twin Health',
    description: 'Your virtual health companion monitoring vital signs.',
  },
  {
    icon: Apple,
    title: 'Nutrition Tracker',
    description: 'Log meals and track macro nutrients with AI-powered insights.',
  },
  {
    icon: Sparkles,
    title: 'AR Health Aura',
    description: 'Visualize your health status in augmented reality.',
  },
  {
    icon: Bot,
    title: 'AI Habit Coach',
    description: 'Personalized guidance for better health habits.',
  },
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Your Journey to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Wellness
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Transform your health with our comprehensive tracking tools and AI-powered insights.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/dashboard" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/about" className="btn bg-white hover:bg-gray-50">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Better Health
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools to monitor and improve your well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Health?
          </h2>
          <Link
            to="/dashboard"
            className="btn bg-white text-primary hover:bg-gray-50 hover:text-primary-dark"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;