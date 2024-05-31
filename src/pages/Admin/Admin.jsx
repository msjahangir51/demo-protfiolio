import React, { useState } from 'react'
import "./Admin.css"
import axios from "axios";
import cloud_uploads from "../../../public/cloud-upload.png";
function Admin() {
    const [categorize,setcategorize] = useState(null)
    const [title,settitle] = useState(null)
    const [weblink,setweblink] = useState(null)
    const [image,setimage] = useState(null)
    const AddPoject = async ()=>{
        const fromData = new FormData();
        fromData.append("file", image)
        fromData.append("categorize", categorize)
        fromData.append("title", title)
        fromData.append("weblink", weblink)
        
        // fromData.append("", image)
        await axios.post("https://protfolio-api-q2dg.onrender.com/api/upload",fromData).then(res => console.log(res)).catch((err) =>{
            console.log(err.message)
        })

    }
    const handesubmit = (e)=>{
        // e.preventDefault()
        AddPoject();
    }
  return (
    <div className="Admin">
        <div className="container">
        <h1>Admin Page</h1>

        <div className="form-table">
            <form>
                <input required type="text" name="categorize" id='categorize' placeholder='Enter Your Protfolio Categorize' onChange={(e)=> setcategorize(e.target.value)} />
                <input required type="text" name="title" placeholder='Enter Your Protfolio Title' onChange={(e)=> settitle(e.target.value)} />
                <input required type="text" name="weblink" placeholder='Enter Your Protfolio Link' onChange={(e)=> setweblink(e.target.value)} />
                <label htmlFor="image" className="image-uploder-clouds">
                    <img src={cloud_uploads} alt="" />
                <input required type="file" name="image" id="image" className='image-uploader-input' onChange={(e)=> setimage(e.target.files[0])} />
                </label>
                <button className='productAdd-btn' onClick={handesubmit}>product add</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Admin