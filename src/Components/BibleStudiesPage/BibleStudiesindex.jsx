import React, {useEffect, useState} from 'react'
import axios from "axios"

export const BibleStudiesindex = () => {

const [data, setBibleStudy] = useState([]);

  useEffect(() => {
    axios.get("https://nubsuenr.onrender.com/biblestudy")
    .then(response => setBibleStudy(response.data))
    .catch(err => console.log(err))
      
    },[])

  return (
    <>
       <div className="container top">
        <div className="row">
            <div className="col-md-12">
                <h1 style={{marginTop:'10px'}}><b>Welcome to Nubs Uenr Bible Studies Blog</b></h1>
                <hr/>
            </div>
            <div className="col-md-12" id="disp">
                <h3>All Blogs</h3>
                  <div>
                  <ul>
                    {
                      data.map(item => (
                        <div className="card_content">
                        <div className="card" >
                            <div className="card-body">
                           
                              <h5 className="card-title title"><b>{item.title}</b></h5>
                       
                              <h6 className="card-subtitle mb-2"style={{color:'white'}} >{item.date}</h6>
                              <p className="card-text snippet" style={{color:'white'}}>{item.snippet}</p>
                              {/* eslint-disable-next-line */}
                              <p className="card-text snippet" style={{color:'white'}}>To read or download. Click <a href={item.link} target="_blank" style={{color:'brown', textDecoration:"none"}}> here</a></p>
                            </div>
                      </div>
                    </div>
                      ))
                    }
                  </ul>
                  </div>
                    
            </div>
        </div>
    </div>
    </>

  )
}
