import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions, search }) {

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      transaction.description.toLowerCase().includes(search.toLowerCase()) ||
      transaction.category.toLowerCase().includes(search.toLowerCase())
    );
  });

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
        {filteredTransactions.map((item) => {
          return (
            <Transaction
              key={item.id}
              date={item.date}
              description={item.description}
              category={item.category}
              amount={item.amount}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionList;
