import { useState } from "react";
import "./ExpenseForm.css";
import * as PropTypes from "prop-types";

const ExpenseForm = ({ onAddExpenseData, onFormClose }) => {
  // one of the most common approaches of organizing state is using multi-state where
  // we have a separate state for any part of the component we want

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(new Date());

  const titleChangeHandler = (evt) => {
    setTitle(evt.target.value);
  };

  const priceChangeHandler = (evt) => {
    setPrice(evt.target.value);
  };

  const dateChangeHandler = (evt) => {
    setDate(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    const userInput = {
      date: new Date(date),
      title,
      price: Number(price),
    };

    onAddExpenseData(userInput);
    setTitle("");
    setPrice("");
    setDate("");
    onFormClose();
  };

  const formHideHandler = () => {
    onFormClose();
  };

  // the alternative approach for organizing state is to use the object
  // const [formData, setFormData] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  // and the updating flow in this case is a little DIFFERENT:
  // 1) we need to UPDATE the part of the object with the new value
  // 2) we need to KEEP(copy) other non-updated parts (that's why we use spread operator)
  // 3) we need to have the LATEST state before we update, because we are spreading the state and replacing
  // values (if we replace/update a value on an "old" version of the state then it won't make any sense because
  // newer version of the state won't have this updated value) and that's why we use ALTERNATIVE setter function
  // FORM which receives a callback with the latest version of the state (this state is provided by React)

  // const titleChangeHandler = (evt) => {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       title: evt.target.value,
  //     };
  //   });
  // };
  //
  // const amountChangeHandler = (evt) => {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       amount: evt.target.value,
  //     };
  //   });
  // };
  //
  // const dateChangeHandler = (evt) => {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       date: evt.target.value,
  //     };
  //   });
  // };

  return (
    <form className="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={titleChangeHandler}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
            value={price}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={formHideHandler}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  onAddExpenseData: PropTypes.func,
  onFormClose: PropTypes.func,
};

export default ExpenseForm;
