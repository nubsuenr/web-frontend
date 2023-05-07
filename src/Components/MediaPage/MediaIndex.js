import React from 'react'
import { Link } from 'react-router-dom';

export const MediaIndex = () => {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'> 
        <h3 style={{textAlign:'center', marginTop:'10px'}}>Welcome to the Media Section of Nubs-Uenr</h3>
        <p style={{textAlign:'center'}}>This page contains contents from our biblestudies, prayer meetings and sermons</p>
        <p style={{textAlign:'center'}}>The content on each page maybe a youtube link or an article.</p>
        <div style={{marginTop:'10px', height:'auto',display:'flex', justifyContent:'space-evenly', alignItems:'center',flexWrap:'wrap',gap:'1rem'}}> 
        <div className='card'>
       <Link to="/biblestudies" style={{textDecoration:'none', color:'#565e68',padding:'10px'}}> 
       <h3>Biblestudies</h3>
       </Link>
         </div>
        <div className='card'>
       <Link to="/prayers" style={{textDecoration:'none', color:'#565e68',padding:'10px'}}>
       <h3>Prayers</h3> 
       </Link>
         </div>
        <div className='card'>
       <Link to="/sermons" style={{textDecoration:'none',padding:'10px',color:'#565e68'}}>
       <h3>Sermons</h3> 
       </Link>
         </div>
        <div className='card'>
       <Link to="/events" style={{textDecoration:'none', color:'#565e68',padding:'10px'}}>
       <h3>Other Events</h3> 
       </Link>
         </div>
          
        </div>
        </div>
      </div> 
    </div>
    </>
  )
}
