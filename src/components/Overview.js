'use client';

export default function Overview() {
  // Sample data for the dashboard
  const stats = {
    totalCrops: 24,
    activeFields: 8,
    harvestReady: 3,
    weatherScore: 85
  };

  const recentActivities = [
    { id: 1, action: 'Watered Field A', time: '2 hours ago', type: 'irrigation' },
    { id: 2, action: 'Applied fertilizer to Field B', time: '1 day ago', type: 'fertilizer' },
    { id: 3, action: 'Harvested tomatoes', time: '2 days ago', type: 'harvest' },
    { id: 4, action: 'Planted new seeds', time: '3 days ago', type: 'planting' }
  ];

  const weatherData = {
    temperature: 24,
    humidity: 65,
    rainfall: 12,
    windSpeed: 8
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <span className="text-emerald-600 text-xl">🌾</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Crops</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalCrops}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <span className="text-blue-600 text-xl">🏞️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Fields</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeFields}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <span className="text-orange-600 text-xl">🚜</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Harvest Ready</p>
              <p className="text-2xl font-bold text-gray-900">{stats.harvestReady}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <span className="text-green-600 text-xl">🌤️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Weather Score</p>
              <p className="text-2xl font-bold text-gray-900">{stats.weatherScore}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities and Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'irrigation' ? 'bg-blue-500' :
                    activity.type === 'fertilizer' ? 'bg-green-500' :
                    activity.type === 'harvest' ? 'bg-orange-500' : 'bg-purple-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weather Widget */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Current Weather</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{weatherData.temperature}°C</div>
                <div className="text-sm text-gray-500">Temperature</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{weatherData.humidity}%</div>
                <div className="text-sm text-gray-500">Humidity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{weatherData.rainfall}mm</div>
                <div className="text-sm text-gray-500">Rainfall</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{weatherData.windSpeed} km/h</div>
                <div className="text-sm text-gray-500">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
