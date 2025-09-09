'use client';
import Signin from '../app/signin/page';
import Signup from '../app/signup/page';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter(); 
  const handle1SignIn = () => {
  router.push('/signin');
};
const handle1SignUp = () => {
  router.push('/signup');
};


  

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Fasalmitr </h1>
            </div>
            <div className="flex items-center space-x-4">
              <h3 className="text-gray-700">Don't have an account?</h3>
              <button
                onClick={handle1SignIn}
                className="px-4 py-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200"
              >
                Sign In
              </button>
              <button
                onClick={handle1SignUp}
                className="px-6 py-2 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors duration-200"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Farming
              <span className="text-emerald-600"> Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Monitor your crops, track weather conditions, and get intelligent farming recommendations 
              all in one powerful platform designed for modern farmers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button
                onClick={handleSignUp}
                className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </button> */}
              <button
                onClick={handle1SignIn}
                className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-200"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Smart Farming
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and insights you need to optimize your farming operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Weather Monitoring */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌤️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Weather</h3>
              <p className="text-gray-600 mb-6">
                Get accurate weather forecasts, alerts, and farming recommendations based on current conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• 5-day weather forecast</li>
                <li>• Farming condition alerts</li>
                <li>• Planting & harvesting recommendations</li>
              </ul>
            </div>

            {/* Crop Management */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌾</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crop Management</h3>
              <p className="text-gray-600 mb-6">
                Track your crops, monitor growth stages, and get personalized care recommendations.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Crop growth tracking</li>
                <li>• Disease & pest alerts</li>
                <li>• Harvest timing optimization</li>
              </ul>
            </div>

            {/* Task Management */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Tasks</h3>
              <p className="text-gray-600 mb-6">
                Organize your farming tasks with intelligent scheduling and weather-based recommendations.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Automated task scheduling</li>
                <li>• Weather-based reminders</li>
                <li>• Progress tracking</li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Farm Analytics</h3>
              <p className="text-gray-600 mb-6">
                Get insights into your farm's performance with detailed analytics and reports.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Yield predictions</li>
                <li>• Cost analysis</li>
                <li>• Performance metrics</li>
              </ul>
            </div>

            {/* Mobile Access */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Ready</h3>
              <p className="text-gray-600 mb-6">
                Access your farm data anywhere, anytime with our responsive mobile-friendly interface.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Works on all devices</li>
                <li>• Offline capabilities</li>
                <li>• Push notifications</li>
              </ul>
            </div>

            {/* Expert Support */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">👨‍🌾</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600 mb-6">
                Get help from agricultural experts and connect with a community of farmers.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• 24/7 expert support</li>
                <li>• Community forum</li>
                <li>• Best practices guide</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Fasalmitr  Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and transform your farming operations with our simple 3-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sign Up & Setup</h3>
              <p className="text-gray-600">
                Create your account and set up your farm profile with basic information about your location and crops.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitor & Track</h3>
              <p className="text-gray-600">
                Start monitoring weather conditions, tracking your crops, and managing your farming tasks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimize & Grow</h3>
              <p className="text-gray-600">
                Use our insights and recommendations to optimize your farming practices and increase your yields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of farmers who are already using Fasalmitr  to optimize their operations and increase their yields.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button
              onClick={handleSignUp}
              className="px-8 py-4 bg-white text-emerald-500 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </button> */}
            <button
              onClick={handle1SignIn}
              className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl border-2 border-emerald-300 hover:bg-emerald-700 transition-all duration-200"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🌱</span>
                </div>
                <h3 className="text-xl font-bold">Fasalmitr </h3>
              </div>
              <p className="text-gray-400">
                Smart farming solutions for modern agriculture.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Weather Monitoring</li>
                <li>Crop Management</li>
                <li>Task Planning</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Community</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fasalmitr . All rights reserved.</p>
          </div>
        </div>

      </footer>
    </div>
  );
}
