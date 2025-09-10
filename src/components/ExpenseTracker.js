"use client"

import { useMemo } from "react"

export default function ExpenseTracker({ expenses, totalExpenses, onDeleteExpense }) {
  const categoryTotals = useMemo(() => {
    const totals = {}
    expenses.forEach((expense) => {
      totals[expense.category] = (totals[expense.category] || 0) + expense.amount
    })
    return totals
  }, [expenses])

  const sortedCategories = Object.entries(categoryTotals).sort(([, a], [, b]) => b - a)

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
    }).format(amount)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">Total Monthly Expenses</h3>
          <p className="text-3xl font-bold text-primary">{formatCurrency(totalExpenses)}</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">Total Transactions</h3>
          <p className="text-3xl font-bold text-secondary">{expenses.length}</p>
        </div>
      </div>

      {/* Category Breakdown */}
      {sortedCategories.length > 0 && (
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Expenses by Category</h3>
          <div className="space-y-3">
            {sortedCategories.map(([category, amount]) => {
              const percentage = totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0
              return (
                <div key={category} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-foreground">{category}</span>
                      <span className="text-sm text-muted-foreground">
                        {formatCurrency(amount)} ({percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Recent Expenses */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-4">Recent Expenses</h3>

        {expenses.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No expenses recorded yet. Add your first expense using the form.
          </p>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {expenses
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((expense) => (
                <div key={expense.id} className="flex items-center justify-between p-3 bg-muted rounded-md">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium text-foreground">{expense.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {expense.category} • {formatDate(expense.date)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground">{formatCurrency(expense.amount)}</span>
                    <button
                      onClick={() => onDeleteExpense(expense.id)}
                      className="text-destructive hover:text-destructive/80 p-1 rounded"
                      title="Delete expense"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
