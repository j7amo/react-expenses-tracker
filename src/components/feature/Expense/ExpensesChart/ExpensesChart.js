import * as PropTypes from "prop-types";
import Chart from "../../../shared/Chart/Chart";

const ExpensesChart = ({ items }) => {
  // here we convert items to match the needed structure of the component which will use them later
  const processedItems = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const item of items) {
    processedItems[item.date.getMonth()].value += item.price;
  }

  return <Chart items={processedItems} />;
};

ExpensesChart.propTypes = {
  items: PropTypes.array,
};

export default ExpensesChart;
