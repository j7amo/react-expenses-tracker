import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import * as PropTypes from "prop-types";

const NewExpense = ({ onAddExpenseData }) => {
  const addExpenseDataHandler = (expenseData) => {
    onAddExpenseData({
      ...expenseData,
      id: Math.random().toString(),
    });
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpenseData={addExpenseDataHandler} />
    </div>
  );
};

NewExpense.propTypes = {
  onAddExpenseData: PropTypes.func,
};

export default NewExpense;
