import React,{useState} from 'react'

export const Counselling = () => {

    const [fullname, setFullName] = useState("");
    const [worringmessage, setWorringMessage] = useState("");
    const [message, setMessage] = useState("")
    
    let handleSubmit = async(e) => {
        e.preventDefault();
        try{
            let res = await 
            fetch("https://nubsuenr.onrender.com/postcounselling", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                fullname:fullname,
                worringmessage:worringmessage,
            }),
            });
            
            if(res.status === 200){
                setFullName(fullname);
                setWorringMessage(worringmessage)
                console.log(fullname)
                console.log(worringmessage)
                setMessage("Message Sent Successfully")
            }else{
                setMessage("Message not sent")
            }
        }catch(err){
            console.log(err)
            }}

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
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="name" value={fullname} style={{marginTop:'10px'}} onChange={(e) => setFullName(e.target.value)} />
                        <i>*Please you can choose to add your name or not.</i>
                        <textarea cols="50" rows="30" placeholder="type your request" value={worringmessage} onChange={(e) => setWorringMessage(e.target.value)} required></textarea>
                        <button className="btn btn-success" style={{width:'100px'}} type='submit'>Submit</button>
                        <div>
                            {message ?
                            <p>{message}</p>: null    
                        }
                        </div>
                    </form>
                </div>
            </div>
             </div>
        </div>
  );

  }