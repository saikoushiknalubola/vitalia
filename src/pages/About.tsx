import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Holistic Health',
      description: 'We believe in nurturing both physical and mental well-being.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your health data is encrypted and never shared without consent.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built with feedback from health experts and users like you.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission for Better Health
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're dedicated to making health tracking intuitive, insightful, and accessible to
              everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2024, Vitalia emerged from a simple idea: health tracking should be
              intuitive and meaningful. We combined cutting-edge technology with user-centered
              design to create a platform that not only tracks your health metrics but provides
              actionable insights for better living.
            </p>
            <p className="text-gray-600">
              Today, we're proud to help thousands of users worldwide on their journey to better
              health and wellness.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;