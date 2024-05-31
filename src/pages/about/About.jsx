import React from 'react'
import "./About.css"
import AboutImage from "../../../public/about-us.png";
function About() {
  return (
    <div className='About'>
        <div className="container">
            <div className="about-col">
                <img src={AboutImage} />
            </div>
            <div className="about-col">
                <h1>let me introduce myself</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repudiandae deleniti molestias! Excepturi architecto accusamus temporibus.</p>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit minima tenetur vero quidem accusamus recusandae tempora! Aliquid deserunt quibusdam adipisci voluptatem possimus perspiciatis incidunt et obcaecati numquam! Architecto, sint assumenda.
                </p>
                <button>download cv</button>
            </div>
        </div>
    </div>
  )
}

export default About