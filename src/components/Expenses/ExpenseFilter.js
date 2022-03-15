import React from "react";
import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (eve) => {
    props.onChangeFilter(eve.target.value);
  };
  let minOffset=0, maxOffset = 3;
  let thisYear = new Date().getFullYear();
  let allYears = [];
  for (let yr = minOffset; yr <= maxOffset; yr++) {
    allYears.push(thisYear - yr);
  }
  const yearList = allYears.map((yr,i) => {
    return <option value={yr} key={i}>{yr}</option>;
  });
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {yearList}
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
