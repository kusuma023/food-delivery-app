import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home")

    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
        <Link to='/'><img className="logo" src={assets.logo} alt='logo'/></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</Link>
            <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"active":""}>Contact us</a>
        </ul>
        <div className='navbar-right'>
            <img className='search-icon' src={assets.searchIcon} alt='searchicon'/>
            <div className='navbar-search-icon'>
                <Link to='/cart'><img className='cart-icon' src={assets.cartIcon} alt="cart" /></Link>
                <div className={getTotalCartAmount() ? '' : 'dot'}></div>
            </div>
            <button onClick={()=>setShowLogin(true)} >sign in</button>
        </div>
    </div>
  )
}

export default Navbar

