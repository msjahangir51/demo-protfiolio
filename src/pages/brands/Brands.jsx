import React, { useContext } from 'react'
import { Context } from '../../App'
import "./Brands.css"
import { IoCall } from "react-icons/io5";

function Brands() {
    const [brandsData] = useContext(Context);
  return (
    <div className='brands'>
        <div className="container">
            <div className="brands-col">
                {brandsData && brandsData.map(items=>{
                    const {id,image} = items;
                    return(
                    <div className="brands-img" key={id} >
                        <img src={image}/>
                    </div>
                    )
                })}
            </div>
            <div className="brands-col-mini">
                <div className="col-1">
                    <h1>10</h1>
                    <p>Years Experience Working</p>
                </div>

                <div className="col-2">
                    <div className="call-icon">
                        <IoCall/>
                    </div>
                    <div>
                        <h1>Call now</h1>
                        <p>+88011111111111</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brands 