import React, { useState } from 'react'
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler  = (eve) =>
        setEnteredTitle(eve.target.value);
    const amountChangeHandler = (eve) =>
        setEnteredAmount(eve.target.value);
    const dateChangeHandler  = (eve) =>
        setEnteredDate(eve.target.value);
    const submitHandler = (eve) => {
        eve.preventDefault();
        const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    const current = new Date();
    const currentDate = `${current.getFullYear()}-${current.getMonth()+1<10?`0${current.getMonth()+1}`:`${current.getMonth()+1}`}-${current.getDate()}`;
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        placeholder='Expense'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        placeholder='0.00'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max={`${currentDate}`}
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm