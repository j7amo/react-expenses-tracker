import "./ExpenseItem.css";
import * as PropTypes from "prop-types";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../../shared/Card/Card";

const ExpenseItem = ({ date, title, price }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${price}</div>
        </div>
      </Card>
    </li>
  );
};

ExpenseItem.propTypes = {
  date: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ExpenseItem;
