import * as PropTypes from "prop-types";
import { useState } from "react";
import "./Expenses.css";
import Card from "../../../shared/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

const Expenses = ({ items }) => {
  const [year, setYear] = useState("2020");
  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear() === Number(year)
  );

  const expensesFilterChangeHandler = (evt) => {
    setYear(evt.target.value);
  };

  // we can store JSX just like any other values
  // let expensesContent = <p>No expenses for selected year found</p>;
  //
  // if (expenses.length !== 0) {
  //   expensesContent = expenses.map(({ id, date, title, price }) => {
  //     return <ExpenseItem key={id} date={date} title={title} price={price} />;
  //   });
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={year}
          onExpensesFilterChange={expensesFilterChangeHandler}
        />
        {/*Here we use a trick with '&&' operator INSTEAD of ternary '...?...:...' to make code more readable*/}
        {/*{filteredExpenses.length === 0 && (*/}
        {/*  <p>No expenses for selected year found</p>*/}
        {/*)}*/}
        {/*{filteredExpenses.length !== 0 &&*/}
        {/*  filteredExpenses.map(({ id, date, title, price }) => {*/}
        {/*    return (*/}
        {/*      <ExpenseItem key={id} date={date} title={title} price={price} />*/}
        {/*    );*/}
        {/*  })}*/}
        {/*  BUT! there is even cleaner way of doing this: we can extract all these conditional rendering into a variable
        outside 'return' statement to make it have a value based on condition and then just rendering it here*/}
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

Expenses.propTypes = { items: PropTypes.array };

export default Expenses;
