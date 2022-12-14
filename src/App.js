import Expenses from "./components/feature/Expense/Expenses/Expenses";
import NewExpense from "./components/feature/Expense/NewExpense/NewExpense";
import { useState } from "react";

const expenseItems = [
  {
    id: 1,
    date: new Date(2019, 2, 3),
    title: "Book",
    price: 10,
  },
  {
    id: 2,
    date: new Date(2020, 3, 4),
    title: "PC",
    price: 1000,
  },
  {
    id: 3,
    date: new Date(2021, 4, 5),
    title: "Plane",
    price: 10000,
  },
];

const App = () => {
  // although we do not explicitly import 'React' anymore in the newer versions of this library,
  // the whole React setup still uses 'React' object "under the hood" and basically uses 'createElement' method
  // to transform what we write as a JSX into JS objects.
  // p.s. This also helps us to see why we need a wrapper element around 2 or more adjacent JSX-elements:
  // we see that each consecutive 'React.createElement' call is 'inside' the previous call so this way we are
  // making a tree of nested objects.
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(Expenses, { items: expenseItems })
  // );
  const [expenses, setExpenses] = useState(expenseItems);

  const addExpenseDataHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
