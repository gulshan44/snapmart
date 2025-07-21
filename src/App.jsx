import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer/Footer'
import Store from './pages/Store'
import Cart from './pages/CartPage'

const App = () => {
  return (
    <div>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        <Footer />

      </BrowserRouter>

    </div>
  )
}

export default App