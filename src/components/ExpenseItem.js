import "./ExpenseItem.css";
import * as PropTypes from "prop-types";
import ExpenseDate from "./ExpenseDate";

ExpenseDate.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

function ExpenseItem({ date, title, price }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
