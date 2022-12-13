import "./ExpensesFilter.css";
import * as PropTypes from "prop-types";

const ExpensesFilter = ({ year, onExpensesFilterChange }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onExpensesFilterChange} value={year}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

ExpensesFilter.propTypes = {
  year: PropTypes.string,
  onExpensesFilterChange: PropTypes.func,
};

export default ExpensesFilter;
