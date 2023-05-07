import React from 'react'
import { sermonvideos } from '../Constants'


export const SermonIndex = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>

            </div>
            
            <div className='col-md-12'>
            <h1 style={{marginTop:'10px'}}><b>Welcome to Nubs Uenr Prayer Blog</b></h1>
                <hr/>
                <div style={{flexWrap:"wrap",padding:"20px",display: "flex",flexDirection:"row",justifyContent:"space-around"}}>
                {sermonvideos.map((sermonvideo,index) => (
                    <div className="card" style={{padding:"10px",textAlign:"center", marginBottom:"10px"}}>
                    <iframe  height="315" src={sermonvideo.source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                ))}
                </div>
            </div>
        </div>
        <br></br>
    </div>
  )
}
