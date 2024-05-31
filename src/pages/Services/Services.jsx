import React, { useContext } from 'react'
import "./Services.css"
import { serviceDoc } from '../../../public/data';
function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="col-1">
          <h1>services offers</h1>
          <p>There are many variations 
            of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio nam possimus eligendi et nihil suscipit</p>
        </div>
        <div className="col-2">
          {
            serviceDoc && serviceDoc.map(item =>{
              const {id,image,title,drescription} = item;

              return(
                <div className='col-bpx'>
                  <img src={image}/>
                  <h2>{title}</h2>
                  <p>{drescription}</p>
                </div>
              )
            })
          }
        </div> 
      </div>
    </div>
  )
}

export default Services