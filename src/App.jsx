import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer/Footer'
import Store from './pages/Store'
import CartPage from './pages/CartPage'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>

        <Footer />

      </BrowserRouter>

    </div>
  )
}

export default App