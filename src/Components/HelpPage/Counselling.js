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
                    <form method="post" action=''>
                        <input type="text" placeholder="name" name='name' style={{marginTop:'10px'}} />
                        <i>*Please you can choose to add your name or not.</i>
                        <textarea cols="50" rows="30" placeholder="type your request" name="message" required></textarea>
                        <button className="btn btn-success" style={{width:'100px'}}>Submit</button>
                    </form>
                    
                </div>
            </div>
             </div>
        </div>
  )
}
