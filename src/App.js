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

  function handleTransactionUpdate (newTransaction){
    const postFormData = {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newTransaction)
  };

      fetch("http://localhost:3001/transactions", postFormData)
      .then((r) => r.json())
      .then((newTransaction) => setTransactions((transactions) => [...transactions, newTransaction]))
      .catch((error) => alert(error));
  }

  const filterTransactions = transactions.filter((transaction) => search === "" ? true : transaction.description.includes(search));

  function handleSearch (search){
    setSearch(search);
  }

  return (
    <div className='app'>
      <header className='app-header'>
        Bank of FlatIron
      </header>
      <FilterTransaction onSearching={handleSearch}/>
      <AddTransactionForm onSubmittng={handleTransactionUpdate}/>
      <TransactionList transactions={filterTransactions}/>
    </div>
  );
}

export default App;

