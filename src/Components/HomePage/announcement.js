import React, {useEffect, useState} from 'react'
import axios from "axios"


function Announcement(){

  const [isLoading, setIsLoading] = useState(true);
  const [data, setAnnoucement] = useState([]);
  
    useEffect(() => {
      axios.get("https://nubsuenr.onrender.com/announcement")
      .then(response => setAnnoucement(response.data))
      .catch(err => console.log(err))
         setTimeout(() => {
              setIsLoading(false);
            }, 2000); // Set the desired loading time in milliseconds
      },[])


    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ marginTop: "10px" }}>
              <center>
                <h1>Upcoming Events</h1>
              </center>
              {
                isLoading ? (
                  <p style={{color:"white"}}>Loading...</p>
                ) : (
                  data.map(item => (
                    <div style={{ display: "flex", justifyContent:'center' }}>
                    <div style={{width: "50%",boxShadow: "2px 2px 10px",marginRight: "10px",}}>
                       {/* eslint-disable-next-line */}
                       <img src={`https://drive.google.com/uc?id=${item.link}`}></img>
                    </div>
                    <div>
                      <p style={{fontSize:'0.8rem' ,color:'white'}}>{item.description}</p>
                    </div>
                  </div>
                  ))
                ) 
              }

            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
}
export default Announcement