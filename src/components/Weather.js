'use client';

import { useState, useEffect, useCallback } from 'react';
import { getCurrentWeather, getWeatherForecast, generateWeatherAlerts } from '../services/weatherApi';

export default function Weather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [city, setCity] = useState('New Delhi');
  const [country, setCountry] = useState('IN');
  const [weatherAlerts, setWeatherAlerts] = useState([]);

  // Fetch weather data
  const fetchWeatherData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [currentData, forecastData] = await Promise.all([
        getCurrentWeather(city, country),
        getWeatherForecast(city, country)
      ]);
      
      setCurrentWeather(currentData);
      setForecast(forecastData);

      // Weather alert logic
      const alerts = [];
      if (currentData.condition && currentData.condition.toLowerCase().includes('rain')) {
        alerts.push('Heavy rain expected. Please take precautions for your crops and property.');
      } else if (currentData.condition && currentData.condition.toLowerCase().includes('sun')) {
        alerts.push('It\'s too hot and sunny. Ensure proper irrigation and shade for sensitive crops.');
      } else if (currentData.temperature >= 38) {
        alerts.push('Extreme heat alert! Temperatures are very high.');
      } else if (currentData.temperature <= 5) {
        alerts.push('Cold wave alert! Temperatures are very low.');
      }

      setWeatherAlerts(alerts);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError(err.message);
      
      // Set fallback data on error
      setCurrentWeather({
        temperature: 24,
        humidity: 65,
        rainfall: 12,
        windSpeed: 8,
        condition: 'Partly Cloudy',
        icon: '⛅',
        farmingConditions: 'Good',
        location: `${city}, ${country}`,
        lastUpdated: new Date().toISOString()
      });
      
      setForecast([
        { day: 'Today', high: 26, low: 18, condition: 'Partly Cloudy', icon: '⛅', rain: '20%' },
        { day: 'Tomorrow', high: 28, low: 20, condition: 'Sunny', icon: '☀️', rain: '10%' },
        { day: 'Wednesday', high: 25, low: 17, condition: 'Rainy', icon: '🌧️', rain: '80%' },
        { day: 'Thursday', high: 23, low: 16, condition: 'Cloudy', icon: '☁️', rain: '40%' },
        { day: 'Friday', high: 27, low: 19, condition: 'Sunny', icon: '☀️', rain: '5%' }
      ]);
      
      setWeatherAlerts([]);
    } finally {
      setLoading(false);
    }
  }, [city, country]);

  // Initial data fetch
  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  // Auto-refresh every 10 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeatherData();
    }, 10 * 60 * 1000); // 10 minutes

    return () => clearInterval(interval);
  }, [fetchWeatherData]);

  // Handle city change
  const handleCityChange = (newCity, newCountry = 'IN') => {
    setCity(newCity);
    setCountry(newCountry);
  };

  // Manual refresh
  const handleRefresh = () => {
    fetchWeatherData();
  };

  // Get background style based on weather condition
  const getWeatherBackground = (condition) => {
    if (!condition) return 'bg-gradient-to-br from-gray-100 to-gray-200';
    
    const lowerCondition = condition.toLowerCase();
    
    if (lowerCondition.includes('sun') || lowerCondition.includes('clear')) {
      return 'bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-200';
    } else if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle') || lowerCondition.includes('shower')) {
      return 'bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-200';
    } else if (lowerCondition.includes('cloud') || lowerCondition.includes('overcast')) {
      return 'bg-gradient-to-br from-gray-100 via-gray-50 to-slate-200';
    } else if (lowerCondition.includes('storm') || lowerCondition.includes('thunder')) {
      return 'bg-gradient-to-br from-purple-100 via-indigo-100 to-purple-200';
    } else if (lowerCondition.includes('snow') || lowerCondition.includes('blizzard')) {
      return 'bg-gradient-to-br from-blue-50 via-white to-blue-100';
    } else if (lowerCondition.includes('fog') || lowerCondition.includes('mist') || lowerCondition.includes('haze')) {
      return 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200';
    } else {
      return 'bg-gradient-to-br from-sky-100 via-blue-50 to-sky-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with refresh button and location */}
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Weather Analytics</h3>
              {currentWeather && (
                <p className="text-sm text-gray-500 mt-1">{currentWeather.location}</p>
              )}
            </div>
            <div className="flex items-center space-x-3">
              {lastUpdated && (
                <span className="text-xs text-gray-400">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </span>
              )}
              <button
                onClick={handleRefresh}
                disabled={loading}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '🔄' : '↻'} Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="text-red-400 mr-3">⚠️</div>
            <div>
              <p className="text-sm text-red-800">
                Unable to fetch real-time weather data. Showing demo data instead.
              </p>
              <p className="text-xs text-red-600 mt-1">
                Error: {error}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Current Weather and 5-Day Forecast Side by Side */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Current Weather */}
        <div className={`${getWeatherBackground(currentWeather?.condition)} rounded-lg shadow-sm border border-gray-200 transition-all duration-500`}>
          <div className="p-6 border-b border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900">Current Weather</h3>
          </div>
          <div className="p-6">
            {loading && !currentWeather ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌤️</div>
                  <p className="text-gray-500">Loading weather data...</p>
                </div>
              </div>
            ) : currentWeather ? (
              <div className="">
                <div className="text-center">
                  <div className="text-6xl mb-4">{currentWeather.icon}</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{currentWeather.temperature}°C</div>
                  <div className="text-lg text-gray-600 mb-4 capitalize">{currentWeather.condition}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{currentWeather.humidity}%</div>
                    <div className="text-sm text-gray-500">Humidity</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{currentWeather.rainfall}mm</div>
                    <div className="text-sm text-gray-500">Rainfall</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{currentWeather.windSpeed} km/h</div>
                    <div className="text-sm text-gray-500">Wind Speed</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{currentWeather.farmingConditions}</div>
                    <div className="text-sm text-gray-500">Farming Conditions</div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">5-Day Forecast</h3>
          </div>
          <div className="p-6">
            {loading && forecast.length === 0 ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">📅</div>
                  <p className="text-gray-500">Loading forecast...</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                {forecast.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{day.icon}</div>
                      <div>
                        <div className="text-sm font-medium text-gray-600">{day.day}</div>
                        <div className="text-xs text-gray-500 capitalize">{day.condition}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{day.high}°</div>
                        <div className="text-sm text-gray-500">{day.low}°</div>
                      </div>
                      <div className="text-xs text-blue-600">💧 {day.rain}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Weather Alerts */}
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Weather Alerts</h3>
        </div>
        <div className="p-6">
          {weatherAlerts.length > 0 ? (
            <ul className="list-disc pl-5 text-red-600 space-y-2">
              {weatherAlerts.map((alert, idx) => (
                <li key={idx}>{alert}</li>
              ))}
            </ul>
          ) : (
            <div className="text-green-700">No weather alerts in this area.</div>
          )}
        </div>
      </div>
    </div>
  );
}
