import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer/Footer'
import Store from './pages/Store'
import CartPage from './pages/CartPage'
import { Toaster } from 'react-hot-toast';
import Checkout from './pages/Checkout'
import ThankYou from './component/ThankYou'
import MyOrder from './pages/MyOrder'
import ProductDetail from './pages/ProductDetail'
import Loader from './component/loader/Loader'

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Loader />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkoutpage' element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path='myorder' element={<MyOrder />} />
          <Route path='/store/product-details/:id' element={<ProductDetail />} />
        </Routes>

        <Footer />

      </BrowserRouter>

    </div>
  )
}

export default App