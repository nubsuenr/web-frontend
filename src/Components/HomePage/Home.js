import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Home() {
    return ( 
        <div>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner sec1">
          <div id="image1" class="carousel-item active" style={{ backgroundSize: 'cover', width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
          </div>
          <div id="image2" class="carousel-item" style={{backgroundSize: 'cover', width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
          </div>
          <div id="image3" class="carousel-item" style={{ backgroundSize: 'cover', width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
          </div>
        </div>
        <div id="text">
            <h1 style={{fontSize: '4rem', textAlign: 'center' }}><b>NUBS UENR</b></h1>
            <p style={{color:'ghostwhite'}}>Empowered... For Action!!!</p>
            <button className="btn btn-outline-danger" style={{width:'100px', borderRadius: '20px'}}>
                  <Link href="#" target="_self" style={{textDecoration:'none', color:'white'}}>Join Us</Link>              
            </button>
        </div>    
      </div>
      <br></br>
        </div>
     );
}

export default Home;