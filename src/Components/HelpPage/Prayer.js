import React from 'react'

export const Prayer = () => {
    

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <div className="adv" style={{marginTop:'20px'}}>
                    <h1>Are you Disturbed ?</h1>
                    <h1>Are you Troubled ?</h1>
                    <h1>Do you feel weak in the Spirit ?</h1>
                    <h1>Do you need help ?</h1>
                    <p style={{textAlign:'center'}}><i>For God did not appoint us to suffer wrath but to receive salvation through our Lord Jesus Christ.</i><b> 1 Thessalonians 5:9(NIV)</b></p>
                    <p>Send to us your prayer request(s)</p>
                </div>
                <button className="accordion">Send a prayer request</button>
                <div class className="panel">
                      {/* eslint-disable-next-line */}
                   <p>Click <a href='https://forms.gle/DAwZ2QJxiRDjQCX2A' target='_blank'>Here</a> to send your prayer requests.</p>
                </div>
            </div>
             </div>
        </div>
  )
}
