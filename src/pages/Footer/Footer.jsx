import React from 'react'
import "./Footer.css"
import logo from "../../../public/logo.png";
import { FaFacebook,FaBehance ,FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


function Footer() {
  const date = new Date();
  const years = date.getFullYear();
  return (
    <div className='Footer'>
        <div className="container">
            <div className="footer-subscribe">
                <h1>get update from anywhare</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, minima natus doloremque </p>
                <div className='subcribe'>
                    <input type="text" placeholder='Email' name='email'/>
                    <button>subscribe</button>
                </div>
            </div>
            <div className="footer-copyright">
                <img className='logo' src={logo} alt="" />
              <div className='social'>
                <a href=""><FaFacebook/></a>
                <a href=""><FaBehance/></a>
                <a href=""><FaInstagram/></a>
                <a href=""><BsTwitterX/></a>
              </div>
              <p className='copyright'>
                Copyright &copy; {years} by Correct Coding | All Right reserved.</p>
              <div></div>
            </div>
        </div>
    </div>
  )
}

export default Footer