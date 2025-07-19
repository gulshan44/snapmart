import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer/Footer'
import Store from './pages/Store'

const App = () => {
  return (
    <div>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
        </Routes>

        <Footer />

      </BrowserRouter>

    </div>
  )
}

export default App