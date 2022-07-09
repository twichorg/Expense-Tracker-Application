import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  /*
  const  contextData = useContext(GlobalContext);
  const context = contextData.transactions;
  console.log(context);
  console.log(contextData.transactions);
*/
  const { transactions } = useContext(GlobalContext);     //get transactions from context

  return (
    <>
    <h3>History</h3>
    
    <ul className='list'>
       {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />    
        ))}
    </ul>
    </>
  )
}

export default TransactionList