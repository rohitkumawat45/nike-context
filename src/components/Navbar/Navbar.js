import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PiBagBold, PiHeartStraight } from 'react-icons/pi'
import "./navbar.css"
import logo from '../../assests/other/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { ProductContext } from '../../context/ProductContext';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { search ,setSearch } = useContext(ProductContext);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "scroll";
    }
  }, [toggleMenu]);

  return (
    <div className='nav'>
      <div>
        <div className='navbar'>
          <div className='logo'>
            <Link to={"/nike-context"}><img src={logo} alt="logo" /></Link>
          </div>
          {/* <div className='nav-actions'> */}
          <div className='links'>
            <ul className='nav-links'>
              <Link to="/categories">Categories</Link>
              <Link to="/whatsNew">New & Featured</Link>
            </ul>
          </div>
          
          <div className='nav-btn'>
            <div className="search-bar">
              <input className='searchFilter' type="text" placeholder='Search Products' onChange={(e) => { setSearch(e.target.value) }} value={search} />
            </div>
            <Link className="icons" to="/wishlist"><PiHeartStraight size={35} /></Link>
            <Link className="icons" to="/cart" ><PiBagBold size={35} /></Link>
            <button>Sign In</button>
          </div>

          <div className="ham-menu">
            {toggleMenu
              ? <RiCloseLine size={35} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line size={35} onClick={() => setToggleMenu(true)} />
            }
            {
              toggleMenu && (
                <div className='toggleMenu' >
                  <div className='menu'>
                    <div className='allLinks'>
                      <ul className='ham-links'>
                        <Link to="/categories">Categories</Link>
                        <Link to="/whatsNew">New & Featured</Link>
                      </ul>
                    </div>
                    <div className='toggle-menuBtns'>
                      <Link className="hamicons" to="/wishlist"><PiHeartStraight size={35} /></Link>
                      <Link className="hamicons" to="/cart" ><PiBagBold size={35} /></Link>
                      <button>Sign In</button>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar