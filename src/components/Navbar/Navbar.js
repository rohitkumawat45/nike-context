import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiBagBold, PiHeartStraight } from 'react-icons/pi'
import "./navbar.css"
import logo from '../../assests/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav>
        <div className='navbar'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          {/* <div className='nav-actions'> */}
          <div className='links'>
            <ul className='nav-links'>
              <Link to="/home">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/whatsNew">What's New</Link>
            </ul>
          </div>
          <div className='nav-btn'>
            <Link className="icons" to="/user"><PiHeartStraight size={35} /></Link>
            <Link className="icons" to="/cart" ><PiBagBold size={35} /></Link>
            <button>Sign In</button>
          </div>
          {/* </div> */}

          <div className="ham-menu">
            {toggleMenu
              ? <RiCloseLine size={35} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line size={35} onClick={() => setToggleMenu(true)} />
            }
            {
              toggleMenu && (
                <div className='toggleMenu'>
                  <div className='menu'>
                    <div className='allLinks'>
                      <ul className='ham-links'>
                        <Link to="/home">Home</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/categories">Categories</Link>
                        <Link to="/whatsNew">What's New</Link>
                      </ul>
                    </div>
                    <div className='toggle-menuBtns'>
                      <Link className="hamicons" to="/user"><PiHeartStraight size={35} /></Link>
                      <Link className="hamicons" to="/cart" ><PiBagBold size={35} /></Link>
                      <button>Sign In</button>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar