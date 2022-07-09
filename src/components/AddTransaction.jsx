import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'


const AddTransaction = () => {
    const [text, setText] = useState(''); 

    const [amount, setAmount] = useState(0);  // amount is a number

    const { addTransaction } = useContext(GlobalContext);  // addTransaction is a function

    //console.log(text);
    
    const inputValueText = (e) => { 
        setText(e.target.value);    // setText is a function that takes in the value of the input
    }

    const inputValueAmount = (e) => {   // setAmount is a function that takes in the value of the input
        setAmount(e.target.value);
    }

    const formSubmit = (e) => {     // formSubmit is a function that takes in the event
        e.preventDefault(); // prevents the page from refreshing
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),      // random id
            text,                                                   // text is the value of the input
            amount: +amount                                           // amount is the value of the input
        }
        addTransaction(newTransaction); // addTransaction is a function that takes in the newTransaction
    }

  return (
    <>
    <h3>Add new transaction</h3>

    <form onSubmit={formSubmit}>
        
        <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input 
            type="text" 
            placeholder="Enter text..."
            value={text}
            onChange={inputValueText}
            />
        </div>

        <div className='form-control'>
            <label htmlFor = "amount">Amount <br/>
            (negative - expense, positive - income)</label>
            <input type="number" placeholder="Enter amount..." className="amount" onChange={inputValueAmount}/>
        </div>

        <button onClick={addTransaction} className='btn'>Add transaction</button>

    </form>
    </>
  )
}

export default AddTransaction