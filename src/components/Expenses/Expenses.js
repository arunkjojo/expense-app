import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
export default function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((val,i) => (
        <ExpenseItem 
          key={i}
          title={val.title}
          amount={val.amount}
          date={new Date(val.date)}
        />
        // console.log(new Date(val.date))
      ))}
    </div>
  );
}