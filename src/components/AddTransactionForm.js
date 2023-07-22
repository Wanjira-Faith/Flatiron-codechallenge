import React, { useState } from 'react'

function AddTransactionForm({onSubmittng}) {
    const [formData, setFormData] = useState({
        "date":"",
        "description":"",
        "category":"",
        "amount":0
    })

    const handleSubmit = (e) => {
        e.preventDefault;
        onSubmittng(formData)
    }
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
     }

  return (
    <form onSubmit={handleSubmit} className='new-transaction' onChange={handleChange}>
        <label htmlFor='date'>Date</label>
        <input type='date' name='date' onChange={handleChange} value={formData.date}></input>
        <input type='description' name='description' placeholder='Description' onChange={handleChange} value={formData.description}></input>
        <input type='category'name='category' placeholder='Category' onChange={handleChange} value={formData.category}></input>
        <input type='amount'name='amount' placeholder='Amount' onChange={handleChange} value={formData.amount}></input>
        <button className='btn'>Add Transaction</button>
    </form>
  )
}

export default AddTransactionForm
