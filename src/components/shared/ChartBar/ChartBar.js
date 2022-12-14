import "./ChartBar.css";
import * as PropTypes from "prop-types";

const ChartBar = ({ maxValue, value, label }) => {
  // here we decide how much of the bar should be filled with color to represent the number of expenses
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value * 100) / maxValue)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

ChartBar.propTypes = {
  maxValue: PropTypes.number,
  value: PropTypes.number,
  label: PropTypes.string,
};

export default ChartBar;
