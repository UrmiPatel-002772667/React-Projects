import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props){
    const SaveDataHandler = (enteredData) => {
        const expenseData = {
           ...enteredData,
           id: Math.random().toString() 
        }
        props.onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveData={SaveDataHandler}/>
        </div>
    );
}