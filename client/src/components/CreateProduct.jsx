import React, { useState } from 'react'
import axios from 'axios'
import './ProductForms.css'

const CreateProduct = (props) => {

    const [title,setTitle]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
       axios.post("http://localhost:5000/api/products",{
        title,price,description
       })
        .then((res) =>{
            console.log(res)
            console.log(res.data)
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch((err) =>{
            console.log(err)
         })
        }
    return (
    <div className='container'>
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label>Price</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <label>Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button className='btn'  type="submit">Create</button>
        </form>
    </div>
  )
}

export default CreateProduct