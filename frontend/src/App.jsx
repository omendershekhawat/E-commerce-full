import { useState } from 'react'
import './App.css'
import AddProduct from './components/AddProduct'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLogin from './components/UserLogin'
import AllProducts from './components/AllProducts'
import UserSignup from './components/UserSignup'




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/userLogin' element={<UserLogin/>} />
          <Route path='/allproducts' element={<AllProducts/>}/>
          <Route path='/userSignUp' element={<UserSignup/>}/>
        </Routes>
      </BrowserRouter>
     

    </>
  )
}
export default App


