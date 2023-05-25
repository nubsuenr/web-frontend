import React from 'react'

export const Counselling = () => {


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <div className="adv1" style={{marginTop:'20px'}}>
            <h1>Do you feel Lonely ?</h1>
                    <h1>Do you feel Anxious ?</h1>
                    <h1>Do you feel Depressed ?</h1>
                    <h1>Do you need someone to talk to?</h1>
                    <p>Write to us, we are all ears.</p>
                </div>
                <button className="accordion">Write to Counsellors</button>
                <div class className="panel">
                      {/* eslint-disable-next-line */}
                   <p>Click <a href='https://forms.gle/FSHqn5fMdcKKGHt26' target='_blank'>Here</a> to send your request</p>
                </div>
            </div>
             </div>
        </div>
  );

  }