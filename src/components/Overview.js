'use client';

export default function Overview() {


  

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100">

      {/* Hero Section */}
      <section className="relative py-  sm:px-6 lg:px-8">
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
          </div>
        </div>
      </section>
            {/* How It Works Section */}
      <section className="py-10">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Personalized Farming Guidance</h3>
              <p className="text-gray-600">
               Enter your farm details and receive expert advice tailored to your crops, location, and farming practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Detect Crop Diseases & Disasters</h3>
              <p className="text-gray-600">
                Upload pictures of your crops and get instant disease detection along with actionable solutions to save your yield.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Access Latest Schemes & Insights</h3>
              <p className="text-gray-600">
               Stay updated with government schemes, financial tips, and farming analytics to maximize your productivity and income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-white/50">
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
                Get insights into your farms performance with detailed analytics and reports.
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
    </div>
  );
}
