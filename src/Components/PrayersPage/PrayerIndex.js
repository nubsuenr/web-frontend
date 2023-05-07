import React from 'react'
import { Link } from 'react-router-dom';

export const PrayerIndex = () => {
  return (
    <>
     <div className="container top">
        <div className="row">
            <div className="col-md-12">
                <h1 style={{marginTop:'10px'}}><b>Welcome to Nubs Uenr Prayer Blog</b></h1>
                <hr/>
            </div>
            <div className="col-md-12" id="disp">
                <h3>All Blogs</h3>
                <div className="card_content">
                <div className="card" >
                
                    <Link href="#" className="single">
                    <div className="card-body">
                      <h5 className="card-title title"><b>jlsv</b></h5>
                      <h6 className="card-subtitle mb-2 text-muted date">sl</h6>
                      <p className="card-text snippet"></p>
                    </div>
                </Link>
                </div>
                <p>There are no Blogs to be displayed</p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
