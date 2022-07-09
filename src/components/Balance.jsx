import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext); //get transactions from context

    const amounts = transactions.map(transaction => transaction.amount);  //get all amounts

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); //sum all amounts

  return (
    <>
        <h4>Your Balance</h4>

        <h1 className='balance'>${total}</h1>
    </>
  )
}

export default Balance