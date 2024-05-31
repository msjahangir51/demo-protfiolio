import React, { useState } from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import bannerImage from "../../../public/banner-image.png"
import About from '../about/About'
import Brands from '../brands/Brands'
import Services from './../Services/Services';
import Protfolio from './../Protfolio/Protfolio';
import ClientAboutME from './../ClientAboutME/ClientAboutME';
import Footer from './../Footer/Footer';
function Home() {
  return (
    // common section 
    <div className='main'>
      <Navbar/>
      <div className='hero-section'>
        <div className="container">
          <div className="home-col">
           <h2>Hey <span></span></h2>

           <h1>I am Aayan Ahmed</h1>
           <p>Frontend Web developer</p>
           <button className='btn-1'>Hire me</button>
           <button className='btn-2'>get cv</button>
          </div>
          <div className="home-col">
            <img src={bannerImage} alt="" />
          </div>
        </div>
      </div>

      <About/>

      <Brands/>

      <Services/>

      <Protfolio/>

       <ClientAboutME/>


       ><Footer />
    </div>
      // end of common section 
  )
}

export default Home