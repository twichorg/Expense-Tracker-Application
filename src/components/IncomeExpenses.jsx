import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext); //get transactions from context
  
  const amounts = transactions.map(transaction => transaction.amount);  //get all amounts

  const Income = amounts.filter(transaction => transaction > 0).reduce((acc, item) => (acc += item), 0).toFixed(2); //positive amounts

  const expense = amounts.filter(transaction => transaction < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);  //negative

  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p className='money plus'>{Income}</p>
        </div>
        
        <div>
            <h4>Expense</h4>
            <p className='money minus'>{expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses