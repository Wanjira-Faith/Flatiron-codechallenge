import React from 'react'
import Transaction from './Transaction';

function TransactionList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item => {
            return <Transaction 
            key={item.id} 
            date={item.date} 
            description={item.description} 
            category={item.category} 
            amount={item.amount} >       
            </Transaction>
        })}
      </tbody>
    </table>
  );
}

export default TransactionList

