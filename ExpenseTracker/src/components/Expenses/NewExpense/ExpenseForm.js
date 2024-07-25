import { useState } from 'react';
import './ExpenseForm.css';
export default function ExpenseForm(props){
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //    newTitle: '',
    //    newAmount: '',
    //    newDate: '' 
    // });
    
    function changeTitleHandler(event){
        setNewTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, newTitle: event.target.value};
        // });
        // setUserInput({
        //     ...userInput,
        //     newTitle: event.target.value
        // });
    }

    function changeAmountHandler(event){
        setNewAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     newAmount: event.target.value
        // });
    }

    function changeDateHandler(event){
        setNewDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     newDate: event.target.value
        // });
    }

    // const inputChangeHandler = (identifier, vale) => {
    //     if(identifier ==='title'){
    //         setNewTitle(value);
    //     } else if (identifier === 'date'){
    //         setNewDate(value)
    //     } else {
    //         setNewAmount(value)
    //     }
    // }
    function handleSubmit(event){
        event.preventDefault();
        const expenseData = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate)
        }
        props.onSaveData(expenseData);
        setNewTitle('');
        setNewDate('');
        setNewAmount('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={changeTitleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={newAmount} onChange={changeAmountHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2024-07-23' value={newDate} onChange={changeDateHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit' >Add Expense</button>
                </div>
            </div>
        </form>
    );
}