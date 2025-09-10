"use client"

import { useState, useEffect } from "react"
import ExpenseForm from "./ExpenseForm"
import ExpenseTracker from "./ExpenseTracker"
import FinanceAdvice from "./FinanceAdvice"

export default function FinancePage() {
  const [expenses, setExpenses] = useState([])
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [bankBalance, setBankBalance] = useState(null)

  useEffect(() => {
    // Load expenses from localStorage on component mount
    const savedExpenses = localStorage.getItem("farmerExpenses")
    if (savedExpenses) {
      const parsedExpenses = JSON.parse(savedExpenses)
      setExpenses(parsedExpenses)
      calculateTotal(parsedExpenses)
    }

    const savedBankBalance = localStorage.getItem("farmerBankBalance")
    if (savedBankBalance) {
      setBankBalance(Number.parseFloat(savedBankBalance))
    }
  }, [])

  const calculateTotal = (expenseList) => {
    const total = expenseList.reduce((sum, expense) => sum + Number.parseFloat(expense.amount), 0)
    setTotalExpenses(total)
  }

  const addExpense = (newExpense) => {
    const updatedExpenses = [...expenses, { ...newExpense, id: Date.now() }]
    setExpenses(updatedExpenses)
    calculateTotal(updatedExpenses)

    // Save to localStorage
    localStorage.setItem("farmerExpenses", JSON.stringify(updatedExpenses))
  }

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id)
    setExpenses(updatedExpenses)
    calculateTotal(updatedExpenses)

    // Update localStorage
    localStorage.setItem("farmerExpenses", JSON.stringify(updatedExpenses))
  }

  const updateBankBalance = (balance) => {
    setBankBalance(balance)
    localStorage.setItem("farmerBankBalance", balance.toString())
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">Farm Finance Advisor</h1>
          <p className="text-muted-foreground text-lg">
            Track your expenses and get financial advice for your farming operations
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Expense Form */}
          <div className="lg:col-span-1">
            <ExpenseForm onAddExpense={addExpense} bankBalance={bankBalance} onUpdateBankBalance={updateBankBalance} />
          </div>

          {/* Expense Tracker */}
          <div className="lg:col-span-2">
            <ExpenseTracker expenses={expenses} totalExpenses={totalExpenses} onDeleteExpense={deleteExpense} />
          </div>
        </div>

        {/* Financial Advice Section */}
        <div className="mt-8">
          <FinanceAdvice expenses={expenses} totalExpenses={totalExpenses} bankBalance={bankBalance} />
        </div>
      </div>
    </div>
  )
}
