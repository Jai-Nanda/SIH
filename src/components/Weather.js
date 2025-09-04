'use client';

export default function Weather() {
  const currentWeather = {
    temperature: 24,
    humidity: 65,
    rainfall: 12,
    windSpeed: 8,
    condition: 'Partly Cloudy',
    icon: '⛅'
  };

  const forecast = [
    { day: 'Today', high: 26, low: 18, condition: 'Partly Cloudy', icon: '⛅', rain: '20%' },
    { day: 'Tomorrow', high: 28, low: 20, condition: 'Sunny', icon: '☀️', rain: '10%' },
    { day: 'Wednesday', high: 25, low: 17, condition: 'Rainy', icon: '🌧️', rain: '80%' },
    { day: 'Thursday', high: 23, low: 16, condition: 'Cloudy', icon: '☁️', rain: '40%' },
    { day: 'Friday', high: 27, low: 19, condition: 'Sunny', icon: '☀️', rain: '5%' }
  ];

  const weatherAlerts = [
    { type: 'warning', message: 'Heavy rain expected on Wednesday', time: '2 days' },
    { type: 'info', message: 'Optimal conditions for planting', time: 'Today' },
    { type: 'success', message: 'Good weather for harvesting', time: 'This week' }
  ];

  return (
    <div className="space-y-6">
      {/* Current Weather */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Current Weather</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-6xl mb-4">{currentWeather.icon}</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{currentWeather.temperature}°C</div>
              <div className="text-lg text-gray-600 mb-4">{currentWeather.condition}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{currentWeather.humidity}%</div>
                <div className="text-sm text-gray-500">Humidity</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{currentWeather.rainfall}mm</div>
                <div className="text-sm text-gray-500">Rainfall</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{currentWeather.windSpeed} km/h</div>
                <div className="text-sm text-gray-500">Wind Speed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">Good</div>
                <div className="text-sm text-gray-500">Farming Conditions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">5-Day Forecast</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {forecast.map((day, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="text-sm font-medium text-gray-600 mb-2">{day.day}</div>
                <div className="text-3xl mb-2">{day.icon}</div>
                <div className="text-lg font-bold text-gray-900">{day.high}°</div>
                <div className="text-sm text-gray-500 mb-2">{day.low}°</div>
                <div className="text-xs text-gray-600 mb-1">{day.condition}</div>
                <div className="text-xs text-blue-600">💧 {day.rain}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weather Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Weather Alerts & Recommendations</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {weatherAlerts.map((alert, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                alert.type === 'info' ? 'bg-blue-50 border-blue-400' :
                'bg-green-50 border-green-400'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    alert.type === 'warning' ? 'bg-yellow-400' :
                    alert.type === 'info' ? 'bg-blue-400' :
                    'bg-green-400'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500">In {alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weather History Chart Placeholder */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Weather History</h3>
        </div>
        <div className="p-6">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-gray-500">Weather history chart would be displayed here</p>
            <p className="text-sm text-gray-400 mt-2">Temperature, rainfall, and humidity trends over time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
