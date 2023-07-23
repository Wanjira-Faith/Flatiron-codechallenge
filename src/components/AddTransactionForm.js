import React, { useState } from 'react'

function AddTransactionForm({onSubmitting}) {
    const [formData, setFormData] = useState({
        "date":"",
        "description":"",
        "category":"",
        "amount":""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitting(formData)
    }
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
     }

  return (
    <form onSubmit={handleSubmit} id="new-transaction" onChange={handleChange}>
      <div className="form-inputs">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={formData.date}
        ></input>
        <input
          type="description"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
        ></input>
        <input
          type="category"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          value={formData.category}
        ></input>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={handleChange}
          value={formData.amount}
        ></input>
      </div>
      <button className="btn">Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm
