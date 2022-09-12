import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import AboutUs from '../pages/AboutUs'
import Navbar from '../components/navbar/Navbar'
import ItemView from '../pages/ItemView'
import Footer from '../components/footer/Footer'
import Market from '../pages/Market'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Index = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element= { <Home /> } />
            <Route path='/market' element= { <Market /> } />
            <Route path='/market/:category' element= { <Market /> } />
            <Route path='/item-detail/:id' element= { <ItemView /> } />
            <Route path='/about-us' element= { <AboutUs /> } />
            <Route path='/cart' element= { <Cart /> } />
            <Route path='/profile' element= { <Profile /> } />
            <Route path='/login' element= { <Login /> } />
            <Route path='/register' element= { <Register /> } />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default Index