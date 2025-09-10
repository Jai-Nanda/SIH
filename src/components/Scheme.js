const schemes = [
  {
    id: 1,
    name: "PM-KISAN Samman Nidhi",
    description: "Direct income support to farmers",
    amount: "₹6,000 per year",
    beneficiaries: "45,67,890",
    status: "Active",
    category: "Financial Support",
    deadline: "31st March 2024",
    progress: 85,
    icon: "₹", 
  },
  {
    id: 2,
    name: "Punjab Crop Diversification Scheme",
    description: "Promoting alternative crops to paddy",
    amount: "₹17,500 per acre", 
    beneficiaries: "2,34,567",
    status: "Active",
    category: "Crop Development",
    deadline: "15th June 2024",
    progress: 72,
    icon: "🌾", 
  },
  {
    id: 3,
    name: "Kisan Credit Card Scheme",
    description: "Easy credit access for farmers",
    amount: "Up to ₹3 Lakh",
    beneficiaries: "12,45,678",
    status: "Active",
    category: "Credit Support",
    deadline: "Ongoing",
    progress: 90,
    icon: "👥", 
  },
  {
    id: 4,
    name: "Micro Irrigation Scheme",
    description: "Water conservation through drip irrigation",
    amount: "90% subsidy",
    beneficiaries: "1,23,456",
    status: "Active",
    category: "Water Management",
    deadline: "30th September 2024",
    progress: 65,
    icon: "💧",
  },
  {
    id: 5,
    name: "Farm Mechanization Scheme",
    description: "Subsidized agricultural machinery",
    amount: "50% subsidy",
    beneficiaries: "89,012",
    status: "Active",
    category: "Mechanization",
    deadline: "31st December 2024",
    progress: 58,
    icon: "🚜", 
  },
  {
    id: 6,
    name: "Organic Farming Promotion",
    description: "Support for organic farming practices",
    amount: "₹25,000 per acre",
    beneficiaries: "45,678",
    status: "New",
    category: "Sustainable Agriculture",
    deadline: "31st August 2024",
    progress: 35,
    icon: "🌱",
  },
]

const stats = [
  {
    title: "Total Schemes",
    value: "24",
    description: "Active government schemes",
    icon: "📅", 
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Total Beneficiaries",
    value: "62.5L",
    description: "Farmers benefited",
    icon: "👥", 
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Budget Allocated",
    value: "₹8,450 Cr",
    description: "For FY 2024-25",
    icon: "₹",
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Districts Covered",
    value: "22",
    description: "All districts of Punjab",
    icon: "🚜", 
    color: "bg-green-100 text-green-800",
  },
]

export default function AgricultureDashboard() {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="">
          <h1 className="text-4xl font-bold text-green-800">Agriculture Schemes</h1>
          <p className="text-lg text-green-700 mt-2">
            Overview of government schemes supporting farmers 
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="border border-green-200 bg-white rounded-lg shadow-sm">
                <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
                  <h3 className="text-sm font-medium text-green-800">{stat.title}</h3>
                  <div className={`p-2 rounded-full ${stat.color} text-lg`}>{stat.icon}</div>
                </div>
                <div className="p-6 pt-0">
                  <div className="text-2xl font-bold text-green-900">{stat.value}</div>
                  <p className="text-xs text-green-600 mt-1">{stat.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="grid w-full grid-cols-4 bg-green-100 rounded-lg p-1">
            <button className="bg-green-600 text-white rounded-md py-2 px-4 text-sm font-medium">All Schemes</button>
            <button className="text-green-700 hover:bg-green-200 rounded-md py-2 px-4 text-sm font-medium">
              Financial
            </button>
            <button className="text-green-700 hover:bg-green-200 rounded-md py-2 px-4 text-sm font-medium">
              Technical
            </button>
            <button className="text-green-700 hover:bg-green-200 rounded-md py-2 px-4 text-sm font-medium">
              New Schemes
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {schemes.map((scheme) => {
                return (
                  <div
                    key={scheme.id}
                    className="border border-green-200 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-green-100 rounded-full text-lg">{scheme.icon}</div>
                          <div>
                            <h3 className="text-lg font-semibold text-green-800">{scheme.name}</h3>
                            <p className="text-sm text-green-600">{scheme.description}</p>
                          </div>
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            scheme.status === "New" ? "bg-green-600 text-white" : "bg-green-100 text-green-800"
                          }`}
                        >
                          {scheme.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-green-600 font-medium">Amount</p>
                          <p className="text-green-800 font-semibold">{scheme.amount}</p>
                        </div>
                        <div>
                          <p className="text-green-600 font-medium">Beneficiaries</p>
                          <p className="text-green-800 font-semibold">{scheme.beneficiaries}</p>
                        </div>
                        <div>
                          <p className="text-green-600 font-medium">Category</p>
                          <p className="text-green-800">{scheme.category}</p>
                        </div>
                        <div>
                          <p className="text-green-600 font-medium">Deadline</p>
                          <p className="text-green-800">{scheme.deadline}</p>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                          Apply Now
                        </button>
                        <button className="border border-green-600 text-green-600 hover:bg-green-50 bg-transparent px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
