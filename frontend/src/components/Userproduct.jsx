import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AllProduct.css'

import { useNavigate } from 'react-router-dom'

function Userproduct() {
    const [allproducts, setallproducts] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let response = await axios.get("http://localhost:4000/product/")

        setallproducts(response.data);
    }



    return (
        <div className='AllProducts'>
            <h1>All Products</h1>
            <div className='product-cont'>
                {
                    allproducts.map((product) => {
                        return (
                            <div className='product' key={product._id}>
                                <div className="img-cont">
                                    <img src={`http://localhost:4000/uploads/${product.photo.filename}`} alt="Not Loaded" />
                                </div>
                                <div className='items'>
                                    <h2>{product.name}</h2>
                                </div>
                                <div className="items">
                                    <h3 className='label'>Price:</h3>
                                    <h4>{product.price}</h4>
                                </div>
                                <div className="items">
                                    <h3 className='label'>Category:</h3>
                                    <h4>{product.category}</h4>
                                </div>
                                <div className="items">
                                    <h3 className='label'>Company:</h3>
                                    <h4>{product.company}</h4>
                                </div>
                                <div className="actions">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Userproduct