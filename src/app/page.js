'use client';

import { useState } from 'react';
import Overview from '../components/Overview';
import Crops from '../components/Crops';
import Weather from '../components/Weather';
import Tasks from '../components/Tasks';
import Analytics from '../components/Analytics';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
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
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-900 capitalize">
            {activeTab}
          </h2>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
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
