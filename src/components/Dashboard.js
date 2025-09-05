'use client';

import { useState } from 'react';
import Overview from './Overview';
import Crops from './Crops';
import Weather from './Weather';
import Tasks from './Tasks';
import Analytics from './Analytics';

export default function Dashboard({ onSignOut }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌱</span>
            </div>
            <h1 className="text-lg font-bold text-gray-900">
              Sproutz
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onSignOut}
              className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Sign Out
            </button>
            <button
              onClick={() => setActiveTab(activeTab === 'menu' ? 'overview' : 'menu')}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <span className="text-lg">☰</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {activeTab === 'menu' && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setActiveTab('overview')}>
          <div className="bg-white w-64 h-full shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🌱</span>
                </div>
                <h1 className="text-lg font-bold text-gray-900">
                  Sproutz
                </h1>
              </div>
            </div>
            <nav className="p-4">
              <div className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: '📊' },
                  { id: 'crops', label: 'Crops', icon: '🌾' },
                  { id: 'weather', label: 'Weather', icon: '🌤️' },
                  { id: 'tasks', label: 'Tasks', icon: '✅' },
                  { id: 'analytics', label: 'Analytics', icon: '📈' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 bg-white shadow-sm border-r border-gray-200 flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌱</span>
            </div>
            <h1 className="text-lg font-bold text-gray-900">
              Sproutz
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'crops', label: 'Crops', icon: '🌾' },
              { id: 'weather', label: 'Weather', icon: '🌤️' },
              { id: 'tasks', label: 'Tasks', icon: '✅' },
              { id: 'analytics', label: 'Analytics', icon: '📈' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Desktop Top Header */}
        <header className="hidden lg:block bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 capitalize">
              {activeTab}
            </h2>
            <button
              onClick={onSignOut}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Sign Out
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'crops' && <Crops />}
          {activeTab === 'weather' && <Weather />}
          {activeTab === 'tasks' && <Tasks />}
          {activeTab === 'analytics' && <Analytics />}
        </main>
      </div>
    </div>
  );
}
