import "./Chart.css";
import * as PropTypes from "prop-types";
import ChartBar from "../ChartBar/ChartBar";

const Chart = ({ items }) => {
  // here we calculate max expense to later use it for chart
  const maxExpensesValue = Math.max(...items.map(({ value }) => value));

  return (
    <div className="chart">
      {items.map(({ value, label }) => {
        return (
          <ChartBar
            key={label}
            value={value}
            maxValue={maxExpensesValue}
            label={label}
          />
        );
      })}
    </div>
  );
};

Chart.propTypes = {
  items: PropTypes.array,
};

export default Chart;
