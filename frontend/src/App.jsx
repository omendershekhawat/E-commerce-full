import { useState } from 'react'
import './App.css'
import AddProduct from './components/AddProduct'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLogin from './components/UserLogin'
import AllProducts from './components/AllProducts'
import UserSignup from './components/UserSignup'
import Userproduct from './components/Userproduct'
import Home from './components/Home'
import AdminLogin from './components/AdminLogin'
import AdminSignup from './components/AdminSignup'





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
          <Route path='/allUserProducts' element={<Userproduct/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/AdminSignup' element={<AdminSignup/>}/>
          <Route path='/'element={<Home/>}/>

          
        </Routes>
      </BrowserRouter>
     

    </>
  )
}
export default App


