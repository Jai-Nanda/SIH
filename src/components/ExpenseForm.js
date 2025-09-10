"use client"

import { useState } from "react"

const expenseCategories = [
  "Seeds & Planting",
  "Fertilizers & Chemicals",
  "Equipment & Machinery",
  "Labor & Wages",
  "Fuel & Energy",
  "Irrigation & Water",
  "Storage & Processing",
  "Transportation",
  "Insurance",
  "Maintenance & Repairs",
  "Other",
]

export default function ExpenseForm({ onAddExpense, bankBalance, onUpdateBankBalance }) {
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    paymentMethod: "cash",
  })

  const [bankBalanceInput, setBankBalanceInput] = useState(bankBalance || "")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.category || !formData.description || !formData.amount) {
      alert("Please fill in all required fields")
      return
    }

    onAddExpense({
      ...formData,
      amount: Number.parseFloat(formData.amount),
    })

    // Reset form
    setFormData({
      category: "",
      description: "",
      amount: "",
      date: new Date().toISOString().split("T")[0],
      paymentMethod: "cash",
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBankBalanceUpdate = () => {
    if (bankBalanceInput && Number.parseFloat(bankBalanceInput) > 0) {
      onUpdateBankBalance(Number.parseFloat(bankBalanceInput))
    }
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-2xl font-semibold text-card-foreground mb-6">Add Monthly Expense</h2>

      <div className="mb-6 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-medium text-foreground mb-3">Bank Balance (Optional)</h3>
        <div className="flex gap-2">
          <input
            type="number"
            value={bankBalanceInput}
            onChange={(e) => setBankBalanceInput(e.target.value)}
            placeholder="Enter your current bank balance"
            step="0.01"
            min="0"
            className="flex-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
          />
          <button
            type="button"
            onClick={handleBankBalanceUpdate}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring font-medium transition-colors"
          >
            Update
          </button>
        </div>
        {bankBalance && (
          <p className="text-sm text-muted-foreground mt-2">Current Balance: ₹{bankBalance.toLocaleString("en-IN")}</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
            Expense Category *
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
            required
          >
            <option value="">Select a category</option>
            {expenseCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
            Description *
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="e.g., Corn seeds for 10 acres"
            className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
            required
          />
        </div>

        {/* Amount */}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-foreground mb-2">
            Amount (₹) *
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            step="0.01"
            min="0"
            className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
          />
        </div>

        {/* Payment Method */}
        <div>
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-foreground mb-2">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
          >
            <option value="cash">Cash</option>
            <option value="check">Check</option>
            <option value="credit">Credit Card</option>
            <option value="bank_transfer">Bank Transfer</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring font-medium transition-colors"
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}
