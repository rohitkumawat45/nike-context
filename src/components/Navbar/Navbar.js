import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiBagBold, PiHeartStraight } from 'react-icons/pi'
import "./navbar.css"
import logo from '../../assests/other/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { ProductContext } from '../../context/ProductContext';
import { BiSearch } from 'react-icons/bi'
import CategoryDropDown from '../Category/CategoryDropDown/CategoryDropDown';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const[dropDown , setDropDown] = useState(false);
  const { search, setSearch } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "scroll";
    }
  }, [toggleMenu]);

  useEffect(()=>{
    setTimeout(()=> setDropDown(false), 10000)
  },[dropDown])

  return (
    <div className='nav'>
      <div>
        <div className='navbar'>
          <div className='logo'>
            <Link to={"/nike-context"}><img src={logo} alt="logo" /></Link>
          </div>
          <div className='links'>
            <ul className='nav-links'>
              <div onClick ={()=> setDropDown(true)}>
                <h3 className='category'>Categories</h3>
                {
                  dropDown && (
                    <div className="drop-menu">
                      <CategoryDropDown />
                    </div>
                  )
                }
              </div>
              <Link to="/whatsNew">New & Featured</Link>
            </ul>
            <div className="navsearch-bar">
              <input className='searchFilter' type="text" placeholder='Search Products' onChange={(e) => { setSearch(e.target.value) }} onClick={() => navigate("/searchResults")} value={search} />
              <div className='navsearch-icon'>
                <BiSearch size={25} />
              </div>
            </div>
          </div>

          <div className='nav-btn'>
            <Link className="icons" to="/wishlist"><PiHeartStraight size={25} /></Link>
            <Link className="icons" to="/cart" ><PiBagBold size={25} /></Link>
            <button className='sign-in' onClick={()=> navigate("/login")}>Sign In</button>
          </div>

          <div className="ham-menu">
            {toggleMenu
              ? <RiCloseLine size={30} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line size={30} onClick={() => setToggleMenu(true)} />
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
                      <button onClick={() => navigate("/login")}>Sign In</button>
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