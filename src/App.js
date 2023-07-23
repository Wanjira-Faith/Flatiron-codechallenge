import './App.css';
import React, { useEffect, useState } from 'react'
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import FilterTransaction from './components/FilterTransaction';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((res) => res.json())
    .then((transactions) => setTransactions(transactions))
  },[]);

  function handleTransactionUpdate(newTransaction){
    setTransactions(transactions => [...transactions, newTransaction])
  }

  return (
    <div className='App'>
      <header className='App-header'>
        Bank of FlatIron
      </header>
      <FilterTransaction search={search} setSearch={setSearch} />
      <AddTransactionForm onSubmitting={handleTransactionUpdate}/>
      <TransactionList transactions={transactions} setTransactions={setTransactions} search={search}/>
    </div>
  );
}

export default App;

