"use client"

import { useState } from "react"

export default function DisasterAlertsPage() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "Severe Weather",
      title: "Thunderstorm Warning",
      description: "Severe thunderstorms with heavy rain and strong winds expected in the downtown area.",
      severity: "high",
      location: "Downtown District",
      time: "2024-01-15 14:30",
      status: "active",
    },
    {
      id: 2,
      type: "Flood Alert",
      title: "Flash Flood Watch",
      description: "Potential flash flooding in low-lying areas due to heavy rainfall.",
      severity: "medium",
      location: "Riverside Area",
      time: "2024-01-15 13:15",
      status: "active",
    },
    {
      id: 3,
      type: "Fire Emergency",
      title: "Wildfire Containment",
      description: "Wildfire has been successfully contained. Evacuation orders lifted.",
      severity: "low",
      location: "Forest Hills",
      time: "2024-01-15 11:45",
      status: "resolved",
    },
  ])

  const [filter, setFilter] = useState("all")

  const filteredAlerts = alerts.filter((alert) => {
    if (filter === "all") return true
    if (filter === "active") return alert.status === "active"
    if (filter === "resolved") return alert.status === "resolved"
    return alert.severity === filter
  })

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status) => {
    return status === "active" ? "bg-green-600 text-white" : "bg-gray-500 text-white"
  }

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-green-900 mb-2">Disaster Alert</h1>
              <p className="text-green-700">Monitor and manage emergency alerts in real-time</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-green-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-green-600">Active Alerts</p>
                <p className="text-2xl font-bold text-green-900">
                  {alerts.filter((a) => a.status === "active").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-green-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-green-600">High Severity</p>
                <p className="text-2xl font-bold text-green-900">
                  {alerts.filter((a) => a.severity === "high").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-green-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-green-600">Medium Severity</p>
                <p className="text-2xl font-bold text-green-900">
                  {alerts.filter((a) => a.severity === "medium").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-green-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-green-600">Resolved</p>
                <p className="text-2xl font-bold text-green-900">
                  {alerts.filter((a) => a.status === "resolved").length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-green-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-green-900 mb-4">Filter Alerts</h2>
          <div className="flex flex-wrap gap-3">
            {["all", "active", "resolved", "high", "medium", "low"].map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === filterOption ? "bg-green-600 text-white" : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Alerts List */}
        <div className="bg-white rounded-xl shadow-sm border border-green-200">
          <div className="p-6 border-b border-green-200">
            <h2 className="text-lg font-semibold text-green-900">Current Alerts</h2>
            <p className="text-green-600 text-sm">
              Showing {filteredAlerts.length} of {alerts.length} alerts
            </p>
          </div>

          <div className="divide-y divide-green-100">
            {filteredAlerts.map((alert) => (
              <div key={alert.id} className="p-6 hover:bg-green-25 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(alert.severity)}`}
                      >
                        {alert.severity.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                        {alert.status.toUpperCase()}
                      </span>
                      <span className="text-sm text-green-600">{alert.type}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-green-900 mb-2">{alert.title}</h3>
                    <p className="text-green-700 mb-3">{alert.description}</p>

                    <div className="flex items-center space-x-6 text-sm text-green-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {alert.location}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {alert.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 ml-4">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      View Details
                    </button>
                    {alert.status === "active" && (
                      <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
                        Mark Resolved
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Actions */}
        <div className="mt-8 bg-green-600 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Emergency Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
              Create New Alert
            </button>
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">
              Send Mass Notification
            </button>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Emergency Broadcast
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
