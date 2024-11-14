import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="font-inter font-bold text-xl text-gray-900">Vitalia</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your comprehensive health and wellness companion for a better lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Water Tracking</li>
              <li className="text-gray-600">Step Counter</li>
              <li className="text-gray-600">Sleep Analysis</li>
              <li className="text-gray-600">Mood Tracking</li>
              <li className="text-gray-600">Nutrition Tracking</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Vitalia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;