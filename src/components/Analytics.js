'use client';

export default function Analytics() {
  const cropPerformance = [
    { name: 'Tomatoes', yield: 85, growth: 92, health: 88, profit: 1200 },
    { name: 'Lettuce', yield: 78, growth: 85, health: 90, profit: 800 },
    { name: 'Carrots', yield: 72, growth: 80, health: 85, profit: 950 },
    { name: 'Peppers', yield: 88, growth: 90, health: 87, profit: 1100 },
    { name: 'Spinach', yield: 82, growth: 88, health: 91, profit: 700 }
  ];

  const monthlyData = [
    { month: 'Jan', revenue: 4500, expenses: 2800, profit: 1700 },
    { month: 'Feb', revenue: 5200, expenses: 3200, profit: 2000 },
    { month: 'Mar', revenue: 4800, expenses: 2900, profit: 1900 },
    { month: 'Apr', revenue: 6100, expenses: 3500, profit: 2600 },
    { month: 'May', revenue: 6800, expenses: 3800, profit: 3000 },
    { month: 'Jun', revenue: 7200, expenses: 4000, profit: 3200 }
  ];

  const fieldEfficiency = [
    { field: 'Field A', area: '2.5 acres', utilization: 95, productivity: 88 },
    { field: 'Field B', area: '3.0 acres', utilization: 92, productivity: 85 },
    { field: 'Field C', area: '2.8 acres', utilization: 78, productivity: 72 },
    { field: 'Field D', area: '3.2 acres', utilization: 90, productivity: 82 },
    { field: 'Field E', area: '2.0 acres', utilization: 85, productivity: 79 }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <span className="text-green-600 text-xl">💰</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$34,600</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <span className="text-blue-600 text-xl">📈</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Growth Rate</p>
              <p className="text-2xl font-bold text-gray-900">+12.5%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <span className="text-orange-600 text-xl">🌾</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Yield</p>
              <p className="text-2xl font-bold text-gray-900">81%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <span className="text-purple-600 text-xl">🎯</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Efficiency</p>
              <p className="text-2xl font-bold text-gray-900">88%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Monthly Revenue & Profit</h3>
        </div>
        <div className="p-6">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-gray-500">Revenue and profit chart would be displayed here</p>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-gray-600">{data.month}</div>
                  <div className="text-lg font-bold text-gray-900">${data.revenue}</div>
                  <div className="text-xs text-green-600">+${data.profit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Crop Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Crop Performance Analysis</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Crop</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Yield %</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Growth %</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Health %</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Profit</th>
                </tr>
              </thead>
              <tbody>
                {cropPerformance.map((crop, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{crop.name}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${crop.yield}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{crop.yield}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${crop.growth}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{crop.growth}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-emerald-500 h-2 rounded-full" 
                            style={{ width: `${crop.health}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{crop.health}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-green-600">${crop.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Field Efficiency */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Field Efficiency Analysis</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fieldEfficiency.map((field, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{field.field}</h4>
                  <span className="text-sm text-gray-500">{field.area}</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Utilization</span>
                      <span className="font-medium">{field.utilization}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${field.utilization}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Productivity</span>
                      <span className="font-medium">{field.productivity}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-500 h-2 rounded-full" 
                        style={{ width: `${field.productivity}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights & Recommendations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Insights & Recommendations</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Top Performers</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Peppers showing highest yield (88%)</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Field A has best utilization (95%)</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Revenue up 12.5% this quarter</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Areas for Improvement</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Field C utilization below 80%</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Carrots yield could be improved</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Consider expanding Field E</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
