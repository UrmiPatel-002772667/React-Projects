import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
export default function Expenses(props) {
  const [currentYear, setCurrentYear] = useState('2020');
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === currentYear;
  })
  const filterChangeHandler = (selectedYear) => {
    setCurrentYear(selectedYear)
  }
  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={currentYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}