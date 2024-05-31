import React, { useEffect, useState } from 'react'
import "./Protfolio.css";
import { ProtfolioDoc } from '../../../public/data';
import { FaLink } from "react-icons/fa";

function Protfolio() {
  const [find,setfind] = useState("All")
  return (
    <div className='Protfolio'>
        <div className="container">
            <div className="col-1-top">
                <h1>Recendly dome project quality work</h1>
            </div>
            <div className="col-1">
              <ul>
                <li onClick={()=> setfind("All")}>All</li>
                <li onClick={()=> setfind("Popular")}>Popular</li>
                <li onClick={()=> setfind("Latest")}>Latest</li>
                <li onClick={()=> setfind("Following")}>Following</li>
                <li onClick={()=> setfind("Upcoming")}>Upcoming</li>
              </ul>


            <div className="col-rows">
              {
                ProtfolioDoc && ProtfolioDoc.map((item)=>{
                  const {id, catagory, title,image,link} = item;
                  return(
                    <div key={id} className={`protfolio-col ${find === "All" ? "" : catagory === find ? "" : "hide"}`}>
                      <img src={image} />
                      <div className='text'>
                      <h1>{title}</h1>
                      <p>{catagory}</p>
                      </div>
                      <div className='LinkHoverNow'>
                        <a href={link}><FaLink size={30}/></a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            </div>
        </div>
    </div>
  )
}

export default Protfolio