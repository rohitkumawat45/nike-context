import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import ProductProvider from './context/ProductContext'

function App() {
  return (
    <>
    <div className='app'>
        <ProductProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/contact' />
            </Routes>
          </Router>
        </ProductProvider>
    </div>
    </>
  )
}

export default App