// Simple and robust Weather API service for OpenWeatherMap
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Weather icon mapping
const getWeatherIcon = (iconCode) => {
  const iconMap = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
  };
  return iconMap[iconCode] || '🌤️';
};

// Get farming conditions based on weather
const getFarmingConditions = (temp, humidity, windSpeed, rain) => {
  if (rain > 50) return 'Poor - Heavy Rain';
  if (temp < 5 || temp > 35) return 'Poor - Extreme Temperature';
  if (humidity > 80) return 'Fair - High Humidity';
  if (windSpeed > 20) return 'Fair - High Winds';
  if (temp >= 15 && temp <= 30 && humidity >= 40 && humidity <= 70) return 'Excellent';
  return 'Good';
};

// Demo data fallback
const getDemoData = (city, country) => ({
  current: {
    temperature: 24,
    humidity: 65,
    rainfall: 12,
    windSpeed: 8,
    condition: 'Partly Cloudy',
    icon: '⛅',
    farmingConditions: 'Good',
    location: `${city}, ${country}`,
    lastUpdated: new Date().toISOString()
  },
  forecast: [
    { day: 'Today', high: 26, low: 18, condition: 'Partly Cloudy', icon: '⛅', rain: '20%' },
    { day: 'Tomorrow', high: 28, low: 20, condition: 'Sunny', icon: '☀️', rain: '10%' },
    { day: 'Wednesday', high: 25, low: 17, condition: 'Rainy', icon: '🌧️', rain: '80%' },
    { day: 'Thursday', high: 23, low: 16, condition: 'Cloudy', icon: '☁️', rain: '40%' },
    { day: 'Friday', high: 27, low: 19, condition: 'Sunny', icon: '☀️', rain: '5%' }
  ],
  alerts: [
    { type: 'warning', message: 'Heavy rain expected on Wednesday', time: '2 days' },
    { type: 'info', message: 'Optimal conditions for planting', time: 'Today' },
    { type: 'success', message: 'Good weather for harvesting', time: 'This week' }
  ]
});

// Fetch current weather
export const getCurrentWeather = async (city = 'Punjab', country = 'IN') => {
  try {
    // Check if API key exists
    if (!API_KEY || API_KEY === 'demo_key_replace_with_your_actual_api_key') {
      console.log('No valid API key found, using demo data');
      return getDemoData(city, country).current;
    }

    console.log('Fetching current weather for:', city, country);
    
    const url = `${BASE_URL}/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Current weather API response:', data);
    
    // Extract weather data safely
    const weather = data.weather?.[0] || {};
    const main = data.main || {};
    const wind = data.wind || {};
    const rain = data.rain || {};
    
    return {
      temperature: Math.round(main.temp || 0),
      humidity: main.humidity || 0,
      rainfall: rain['1h'] || 0,
      windSpeed: Math.round((wind.speed || 0) * 3.6), // Convert m/s to km/h
      condition: weather.description || 'Unknown',
      icon: getWeatherIcon(weather.icon),
      farmingConditions: getFarmingConditions(
        main.temp || 0,
        main.humidity || 0,
        (wind.speed || 0) * 3.6,
        rain['1h'] || 0
      ),
      location: `${data.name || city}, ${data.sys?.country || country}`,
      lastUpdated: new Date().toISOString()
    };
    
  } catch (error) {
    console.error('Error fetching current weather:', error);
    console.log('Falling back to demo data');
    return getDemoData(city, country).current;
  }
};

// Fetch 5-day forecast
export const getWeatherForecast = async (city = 'Punjab', country = 'IN') => {
  try {
    // Check if API key exists
    if (!API_KEY || API_KEY === 'demo_key_replace_with_your_actual_api_key') {
      console.log('No valid API key found, using demo forecast');
      return getDemoData(city, country).forecast;
    }

    console.log('Fetching forecast for:', city, country);
    
    const url = `${BASE_URL}/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Forecast API response:', data);
    
    // Check if we have forecast data
    if (!data.list || !Array.isArray(data.list) || data.list.length === 0) {
      throw new Error('No forecast data received');
    }
    
    // Group forecast by day
    const dailyData = {};
    
    data.list.forEach(item => {
      if (!item.dt || !item.main || !item.weather?.[0]) return;
      
      const date = new Date(item.dt * 1000).toDateString();
      if (!dailyData[date]) {
        dailyData[date] = {
          temps: [],
          conditions: [],
          icons: [],
          rain: []
        };
      }
      
      dailyData[date].temps.push(item.main.temp);
      dailyData[date].conditions.push(item.weather[0].description);
      dailyData[date].icons.push(item.weather[0].icon);
      dailyData[date].rain.push(item.rain?.['3h'] || 0);
    });
    
    // Convert to 5-day forecast format
    const dayNames = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday'];
    const forecast = Object.keys(dailyData).slice(0, 5).map((date, index) => {
      const day = dailyData[date];
      const temps = day.temps || [];
      const conditions = day.conditions || [];
      const icons = day.icons || [];
      const rain = day.rain || [];
      
      return {
        day: dayNames[index] || new Date(date).toLocaleDateString('en-US', { weekday: 'long' }),
        high: temps.length > 0 ? Math.round(Math.max(...temps)) : 25,
        low: temps.length > 0 ? Math.round(Math.min(...temps)) : 15,
        condition: conditions[Math.floor(conditions.length / 2)] || 'Unknown',
        icon: getWeatherIcon(icons[Math.floor(icons.length / 2)] || '01d'),
        rain: rain.length > 0 ? `${Math.round(Math.max(...rain) * 10)}%` : '0%'
      };
    });
    
    return forecast;
    
  } catch (error) {
    console.error('Error fetching forecast:', error);
    console.log('Falling back to demo forecast');
    return getDemoData(city, country).forecast;
  }
};

// Generate weather alerts
export const generateWeatherAlerts = (currentWeather, forecast) => {
  const alerts = [];
  
  // Check for heavy rain
  const heavyRainDay = forecast.find(day => 
    day.rain && (day.rain.includes('8') || day.rain.includes('9'))
  );
  if (heavyRainDay) {
    alerts.push({
      type: 'warning',
      message: `Heavy rain expected on ${heavyRainDay.day}`,
      time: heavyRainDay.day === 'Today' ? 'Today' : heavyRainDay.day === 'Tomorrow' ? 'Tomorrow' : '2+ days'
    });
  }
  
  // Check for optimal planting conditions
  if (currentWeather.temperature >= 15 && currentWeather.temperature <= 25 && 
      currentWeather.humidity >= 50 && currentWeather.humidity <= 70) {
    alerts.push({
      type: 'info',
      message: 'Optimal conditions for planting',
      time: 'Today'
    });
  }
  
  // Check for good harvesting conditions
  const goodHarvestDays = forecast.filter(day => 
    day.high >= 20 && day.high <= 30 && 
    (!day.rain || (!day.rain.includes('8') && !day.rain.includes('9')))
  );
  if (goodHarvestDays.length >= 3) {
    alerts.push({
      type: 'success',
      message: 'Good weather for harvesting',
      time: 'This week'
    });
  }
  
  return alerts;
};