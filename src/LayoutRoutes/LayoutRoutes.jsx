import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home/Home'
import Booking from '../Pages/Booking/Booking'
import Dishes from '../Pages/Dishes/Dishes'
import AboutUs from '../Pages/AboutUs/AboutUs'
import NotFound from '../Pages/NotFound/NotFound'


function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/dishes' element={<Dishes/>} />
        <Route path='/services' element={<Booking/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/*' element={<NotFound/>} />

        </Routes>
    <Footer/>
    </Router>
  )
}

export default LayoutRoutes