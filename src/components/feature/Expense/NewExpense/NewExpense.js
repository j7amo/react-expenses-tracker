import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import * as PropTypes from "prop-types";
import { useState } from "react";

const NewExpense = ({ onAddExpenseData }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const showFormHandler = () => {
    setIsFormOpen(true);
  };

  const hideFormHandler = () => {
    setIsFormOpen(false);
  };

  const addExpenseDataHandler = (expenseData) => {
    onAddExpenseData({
      ...expenseData,
      id: Math.random().toString(),
    });
  };

  return (
    <div className="new-expense">
      {isFormOpen ? (
        <ExpenseForm
          onAddExpenseData={addExpenseDataHandler}
          onFormClose={hideFormHandler}
        />
      ) : (
        <button type="button" onClick={showFormHandler}>
          Add new expense
        </button>
      )}
    </div>
  );
};

NewExpense.propTypes = {
  onAddExpenseData: PropTypes.func,
};

export default NewExpense;
