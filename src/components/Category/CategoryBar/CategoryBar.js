import React from 'react'
import { Link } from 'react-router-dom'
import './categoryBar.css'

function CategoryBar() {

  return (
      <div className='header'>
          <Link to="/categories">Filters</Link>
          <Link to="/clothing">Clothing</Link>
          <Link to="/shoes" >Shoes</Link>
          <Link to="/gear">Gears</Link>
      </div>
  )
}

export default CategoryBar