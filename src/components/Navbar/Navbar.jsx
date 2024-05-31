import React, { useState } from 'react'
import "./Navbar.css"
import Logo_Image from "../../../public/logo.png"
import { NavLink } from 'react-router-dom'
import { HiMiniBars3 } from "react-icons/hi2";

function Navbar() {

    const [bars,setbar] = useState(false);
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Logo_Image}/>
        </div>
        <nav className={bars? "bars": ""}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/aboutt">about</NavLink></li>
                <li><NavLink to="/services">services</NavLink></li>
                <li><NavLink to="/portfolio">portfolio</NavLink></li>
                <li><NavLink to="/pages">pages</NavLink></li>
                <li><NavLink to="/blog">blog</NavLink></li>
                <li><NavLink to="/contact">contact</NavLink></li>
            </ul>
        </nav>

        <div className="bars" onClick={()=> setbar(!bars)}>
            <HiMiniBars3 size={30}/>
        </div>
    </div>
  )
}

export default Navbar