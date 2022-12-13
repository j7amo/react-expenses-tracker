import * as PropTypes from "prop-types";
import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../../../shared/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = ({ items }) => {
  const [year, setYear] = useState("2020");

  const expensesFilterChangeHandler = (evt) => {
    setYear(evt.target.value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={year}
          onExpensesFilterChange={expensesFilterChangeHandler}
        />
        {items.map(({ date, title, price }) => {
          return (
            <ExpenseItem
              key={`${date}-${title}-${price}`}
              date={date}
              title={title}
              price={price}
            />
          );
        })}
      </Card>
    </div>
  );
};

Expenses.propTypes = { items: PropTypes.array };

export default Expenses;
