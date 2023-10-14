import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import ProductProvider from './context/ProductContext'
import Contact from './components/Contact/Contact';
import Wishlist from './components/Wishlisht/Wishlist'
import Footer from './components/Footer/Footer'
import Category from './components/Category/Category'
import Gear from './components/Category/Gear/Gear'
import Clothing from './components/Category/Clothing/Clothing'
import Shoes from './components/Category/Shoes/Shoes'
import Products from './components/Products/Products'
import SearchResult from './components/SearchResult/SearchResult'
import Login from './components/Login/Login'

function App() {
  return (
    <>
      <div className='app'>
        <ProductProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/nike-context' index element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/categories'element={<Category/>} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/shoes' element={<Shoes />} />
              <Route path='/clothing' element={<Clothing />} />
              <Route path='/gear' element={<Gear />} />
              <Route path='/products' element={<Products />} />
              <Route path='/searchResults' element={<SearchResult />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            <Footer/>
          </Router>
        </ProductProvider>
      </div>
    </>
  )
}

export default App