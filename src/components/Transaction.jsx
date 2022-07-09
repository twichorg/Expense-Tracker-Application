import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'; //get transactions from context

const Transaction = ({transaction}) => {
  
    const  sign = transaction.amount < 0 ? '-' : '+';   // if amount is negative, then sign is '-'

    const { deleteTransaction } = useContext(GlobalContext); //get deleteTransaction from context

  return (  // if amount is negative, then class is 'minus'

    <li className={transaction.amount < 0 ? 'minus' : 'plus'}> 

        {transaction.text}    
        <span>{sign}${Math.abs(transaction.amount)}</span>  
        <button onClick={() => deleteTransaction(transaction.id)}  className='delete-btn'>X</button>

    </li>

  )
}

export default Transaction