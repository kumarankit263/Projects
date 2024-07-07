import React, { useState } from "react";
const ExpressTracker=()=>{
    const [input,setInput]=useState('');
    const [amount,setAmount]=useState('');
    const[expense,setExpense]=useState([]);

    const changeHandler=(e)=>{
        setInput(e.target.value);
    }
    const amountHandler=(e)=>{
        setAmount(e.target.value);
    }
    const addExpense=()=>{
        if(!input || !amount){
            return;
        }
        const newExpense={ 
            id:expense.length+1,
            title:input,
            amount:amount
        };
        setExpense([...expense,newExpense])
        console.log(expense);
        setInput('');
        setAmount('')
    }
    function deleteExpense(id) {
        setExpense(function(expenses) {
            return expenses.filter(function(expense) {
                return expense.id !== id;
            });
        });
    }
    

    return (
        <div>
            <h2>Expense Tracker</h2>
            <div>
                <input type="text"
                placeholder="Expense"
                onChange={changeHandler}
                value={input}
                />
                <input type="text"
                placeholder="Amount"
                onChange={amountHandler}
                value={amount}
                />
                <button
                onClick={addExpense}>Add Expense</button>
            </div>

            <ul>
                {
                    expense.map((expense)=>(
                        <li key={expense.id}>
                            <span>{expense.title}</span>
                            <span>{expense.amount}</span>
                        <button onClick={()=>deleteExpense(expense.id)}>Delete</button> 
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}
export default ExpressTracker;