import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'

const AddProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const [photo, setPhoto] = useState(null)

    const RegisterProduct = async () => {
        let result = await axios.post("http://localhost:4000/product/add", { name, price, category, company, photo }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        result = result.data
        if (result.name) {
            alert("Product has been Added to database")
        }
    }

    return (
        <div className="addproduct">
            <h1>Add Product to database</h1>
            <form action="" >
                <input type="text" placeholder='Name of product' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='price of product' value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder='Category of product' value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="text" placeholder='Company of product' value={company} onChange={(e) => setCompany(e.target.value)} />
                <input type="file" placeholder='photo' onChange={(e) => setPhoto(e.target.files[0])} />

                <button
                    onClick={(e) => {
                        e.preventDefault()
                        RegisterProduct()
                    }}>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct