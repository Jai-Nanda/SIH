'use client';

import { useState, useEffect } from 'react';
import HomePage from '../components/HomePage';
import Dashboard from '../components/Dashboard';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on component mount
  useEffect(() => {
    // Check if user is already authenticated (from localStorage or session)
    const authStatus = localStorage.getItem('sproutz_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSignIn = () => {
    // Simulate sign in process
    localStorage.setItem('sproutz_authenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleSignUp = () => {
    // Simulate sign up process
    localStorage.setItem('sproutz_authenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem('sproutz_authenticated');
    setIsAuthenticated(false);
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">🌱</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Sproutz</h2>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show homepage if not authenticated, dashboard if authenticated
  if (!isAuthenticated) {
    return <HomePage onSignIn={handleSignIn} onSignUp={handleSignUp} />;
  }

  return <Dashboard onSignOut={handleSignOut} />;
}
