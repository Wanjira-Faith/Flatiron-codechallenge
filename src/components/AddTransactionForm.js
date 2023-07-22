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
    <form>
      
    </form>
  )
}

export default AddTransactionForm
