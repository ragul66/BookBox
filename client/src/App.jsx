import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import CategoryPage from './components/GetCategoryresult'
import Cart from './pages/Cart'
// import Ratings from './components/Ratings'
// import Tamil from './pages/Tamil'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/book/:category' element={<CategoryPage />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/ratings' element={<Ratings />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
