import React, { useState } from "react";

import Form from "./components/Form";

import ExpenseList from "./expense-tracker/components/ExpenseList";
import { set } from "react-hook-form";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

import categories from "./expense-tracker/categories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Rent", amount: 1000, category: "Housing" },
    { id: 2, description: "Groceries", amount: 100, category: "Food" },
    { id: 3, description: "Gas", amount: 40, category: "Transportation" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category == selectedCategory)
    : expenses;

  return (
    <div className="app">
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-2">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
};

export default App;
