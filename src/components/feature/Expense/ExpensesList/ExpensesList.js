import * as PropTypes from "prop-types";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  // conditional rendering can be useful not only in cases when just SOME part of output JSX changes based on condition,
  // but also when the WHOLE output changes COMPLETELY based on condition. In this situation we can use conditional RETURN
  // statements approach:
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">NO EXPENSES FOUND</h2>;
  }

  // this will not render if we get to the previous return statement(obviously only one of these return statements will fire)
  return (
    <ul className="expenses-list">
      {expenses.map(({ id, date, title, price }) => {
        return <ExpenseItem key={id} date={date} title={title} price={price} />;
      })}
    </ul>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.array,
};

export default ExpensesList;
