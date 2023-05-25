import React, {useEffect, useState} from 'react'
import axios from "axios"



function GalleryIndex() {

    const [data, setIamge] = useState([]);

    useEffect(() => {
      axios.get("https://nubsuenr.onrender.com/gallerie")
      .then(response => setIamge(response.data))
      .catch(err => console.log(err))
        
      },[])
  


    return ( 
        <div>
            <div class="row"> 
            <div className="column">
                {
                    data.map(item => (
                        //  eslint-disable-next-line 
                            <img src={`https://drive.google.com/uc?id=${item.image_id}`}></img> 
                    ))
                }
            </div>
        <div className="column">
            <img src={process.env.PUBLIC_URL + '/images/gallery/1.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/2.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/3.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/4.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/5.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/6.jpg'} alt="" />
        </div>
        <div className="column">
        <img src={process.env.PUBLIC_URL + '/images/gallery/7.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/8.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/9.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/10.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/11.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/12.jpg'} alt="" />
        </div>  
        <div className="column">
        <img src={process.env.PUBLIC_URL + '/images/gallery/13.jpeg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/14.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/15.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/16.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/17.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/18.jpg'} alt="" />
        </div>
        <div className="column">
        <img src={process.env.PUBLIC_URL + '/images/gallery/19.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/20.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/21.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/22.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/23.jpeg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/24.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/25.jpg'} alt="" />
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
     );
}

export default GalleryIndex;