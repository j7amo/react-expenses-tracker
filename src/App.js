import ExpenseItem from "./components/ExpenseItem";

const expenseItems = [
  {
    date: new Date(2000, 2, 3),
    title: "Book",
    price: 10,
  },
  {
    date: new Date(2010, 3, 4),
    title: "PC",
    price: 1000,
  },
  {
    date: new Date(2020, 4, 5),
    title: "Plane",
    price: 10000,
  },
];

function App() {
  return (
    <div>
      <p>Hello!!!</p>
      {expenseItems.map(({ date, title, price }) => {
        return <ExpenseItem date={date} title={title} price={price} />;
      })}
    </div>
  );
}

export default App;
