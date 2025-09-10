"use client"

import { useMemo } from "react"

export default function FinanceAdvice({ expenses, totalExpenses, bankBalance }) {
  const advice = useMemo(() => {
    if (expenses.length === 0) {
      return {
        type: "info",
        title: "Start Tracking Your Expenses",
        message: "Begin by adding your monthly farm expenses to get personalized financial advice.",
        tips: [
          "Track all expenses, no matter how small",
          "Categorize expenses properly for better insights",
          "Review your spending patterns monthly",
        ],
      }
    }

    const categoryTotals = {}
    expenses.forEach((expense) => {
      categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount
    })

    const highestCategory = Object.entries(categoryTotals).sort(([, a], [, b]) => b - a)[0]

    const tips = []
    const warnings = []

    const isHighSpending = bankBalance && totalExpenses > bankBalance * 0.5

    if (isHighSpending) {
      warnings.push(
        `⚠️ Your monthly expenses (₹${totalExpenses.toLocaleString("en-IN")}) exceed 50% of your bank balance (₹${bankBalance.toLocaleString("en-IN")}). This indicates potential cash flow concerns.`,
      )

      // Add agriculture-specific advice for high spending
      tips.push("Consider diversifying crops to spread risk and ensure steady income throughout the year.")
      tips.push("Explore government subsidies and schemes available for farmers to reduce input costs.")
      tips.push("Look into cooperative farming or bulk purchasing to reduce seed and fertilizer costs.")
      tips.push("Consider implementing water-efficient irrigation methods to reduce water and energy costs.")
      tips.push("Maintain a contingency fund of at least 3-6 months of expenses for unexpected situations.")
    }

    // Analyze spending patterns
    if (highestCategory && highestCategory[1] > totalExpenses * 0.4) {
      warnings.push(
        `${highestCategory[0]} accounts for ${((highestCategory[1] / totalExpenses) * 100).toFixed(1)}% of your expenses. Consider reviewing this category for potential savings.`,
      )
    }

    // Equipment & Machinery advice
    if (categoryTotals["Equipment & Machinery"] > totalExpenses * 0.3) {
      tips.push(
        "High equipment costs detected. Consider leasing options, buying used equipment, or sharing machinery with neighboring farmers.",
      )
    }

    // Labor costs advice
    if (categoryTotals["Labor & Wages"] > totalExpenses * 0.35) {
      tips.push("Labor costs are significant. Explore mechanization opportunities or seasonal labor optimization.")
    }

    // Fuel & Energy advice
    if (categoryTotals["Fuel & Energy"] > totalExpenses * 0.2) {
      tips.push("Consider solar-powered irrigation systems and energy-efficient equipment to reduce fuel costs.")
    }

    tips.push("Maintain detailed records for claiming agricultural tax benefits and subsidies.")
    tips.push("Consider crop insurance to protect against weather-related losses.")
    tips.push("Explore direct marketing channels to increase profit margins on your produce.")
    tips.push("Plan crop rotation to maintain soil health and reduce fertilizer dependency.")

    return {
      type: warnings.length > 0 ? "warning" : "success",
      title: warnings.length > 0 ? "Areas of Concern" : "Financial Health Check",
      message:
        warnings.length > 0
          ? "We've identified some financial concerns that need immediate attention."
          : "Your expense tracking shows good financial awareness. Here are some tips to optimize further.",
      tips,
      warnings,
    }
  }, [expenses, totalExpenses, bankBalance])

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-start gap-4 mb-6">
        <div
          className={`p-2 rounded-full ${
            advice.type === "warning"
              ? "bg-destructive/10"
              : advice.type === "success"
                ? "bg-primary/10"
                : "bg-secondary/10"
          }`}
        >
          {advice.type === "warning" ? (
            <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          ) : advice.type === "success" ? (
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-card-foreground mb-2">{advice.title}</h2>
          <p className="text-muted-foreground">{advice.message}</p>
        </div>
      </div>

      {bankBalance && (
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">Financial Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Bank Balance:</span>
              <p className="font-semibold text-foreground">{formatCurrency(bankBalance)}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Monthly Expenses:</span>
              <p className="font-semibold text-foreground">{formatCurrency(totalExpenses)}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Expense Ratio:</span>
              <p
                className={`font-semibold ${totalExpenses > (bankBalance * 0.5) ? "text-destructive" : "text-primary"}`}
              >
                {((totalExpenses / bankBalance) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Warnings */}
      {advice.warnings && advice.warnings.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-destructive mb-3">🚨 Areas of Concern</h3>
          <ul className="space-y-2">
            {advice.warnings.map((warning, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span className="text-foreground">{warning}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tips */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-3">🌾 Agricultural Finance Tips</h3>
        <ul className="space-y-2">
          {advice.tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-foreground">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
        <h4 className="font-semibold text-foreground mb-2">⚖️ Important Disclaimer</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The financial advice provided here is for informational purposes only and is based on general farming expense
          patterns. This tool does not replace professional financial consultation. For personalized financial planning,
          agricultural loans, crop insurance, tax advice, or investment decisions, please consult with a qualified
          financial advisor, agricultural finance specialist, or your local bank's agricultural department who can
          assess your specific farming situation and provide tailored recommendations.
        </p>
      </div>
    </div>
  )
}
