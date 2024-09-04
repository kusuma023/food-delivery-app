import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <hr/>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} />
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2> 
                <ul>
                    <li>Home</li> 
                    <li>About us</li> 
                    <li>Delivery</li> 
                    <li>Privacy Policy</li>      
                </ul> 
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9876543210</li>
                    <li>contact@foodcorner.com</li>
                </ul>
            </div>
        </div> 
        <p className='footer-copyright'>Copyright 2024 @ FoodCorner.com - All Rights Reserved.</p> 
    </div>
  )
}

export default Footer
