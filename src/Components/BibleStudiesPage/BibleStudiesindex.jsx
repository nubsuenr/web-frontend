import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

export const BibleStudiesindex = () => {

const [data, setBibleStudy] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/biblestudies")
    .then(response => setBibleStudy(response.data.Blogs))
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
                            <Link href="" className="single">
                            <div className="card-body">
                           
                              <h5 className="card-title title"><b>{item.title}</b></h5>
                       
                              <h6 className="card-subtitle mb-2 text-muted date">{item.date}</h6>
                              <p className="card-text snippet">{item.snippet}</p>
                            </div>
                           </Link>
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
