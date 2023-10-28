import React from 'react'
import { Link } from 'react-router-dom'
import './categoryDropDown.css'

function CategoryDropDown() {
  return (
    <div className='drop-down-menu'>
        <Link to="/clothing" >Clothing</Link>
        <Link to="/shoes" >Shoes</Link>
        <Link to="/gear" >Gears</Link>
    </div>
  )
}

export default CategoryDropDown