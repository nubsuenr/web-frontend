import { Link } from 'react-router-dom';
// import './ToDown'
function Footer() {
    return ( 
<div> 
<footer class="footer-area footer--dark">
  <div class="footer-big">
    <div class="container m-auto">
      <div class="row "  id="con1">
        <div class="col-md-3 col-sm-12">
          <div class="footer-widget">
            <div class="widget-about">
              <div style={{display:'flex',}}>
              <p class="navbar-brand" href="#" id="head"> Nubs Uenr</p>
              <div style={{marginLeft:'10px'}}>
              <a href="http://www.facebook.com/NubsUenrChapter"><i class="bi bi-facebook"></i></a>
              <a href="http://www.twitter.com/@nubs_uenr"><i class="bi bi-twitter"></i></a>
              <a href="http://www.instagram.com/nubs_uenr"><i class="bi bi-instagram"></i></a>
              <a href="https://wa.me/0200039099"><i class="bi bi-whatsapp"></i></a>
              <a href="https://www.youtube.com/@nubsuenr4358"><i class="bi bi-youtube"></i></a>
              </div>
              </div>
                <li>
                  <i className='bi bi-telephone-fill'><a href="tel:0200039099" style={{textDecoration: 'none', color: 'black'}}>+233-200-039-099</a></i>
                </li>
                <li>
                  <i class="bi bi-envelope-fill"></i> 
                  <a href="mailto:nubs.uenrchap@gmail.com" style={{textDecoration: 'none', color: 'black'}}>nubs.uenrchap@gmail.com</a>
                </li>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu footer-menu--1">
              <h4 class="footer-widget-title"><Link to="/wing" style={{textDecoration:'none', color:'black'}}>Our Wings</Link></h4>
              <ul>
                <li>
                  <i class="bi bi-tools"></i> Organising Wing
                </li>
                <li>
                <i class="bi bi-person-fill"></i> Outreach Wing
                </li>
                <li>
                <i class="bi bi-music-note-beamed"></i> Music Wing
                </li>
                <li>
                  <i class="bi bi-film"></i> Theatre Wing
                </li>
                <li>
                  <i class="bi bi-book-fill"></i> Bible Studies Wing
                </li>
                <li>
                  <i class="bi bi-file-ppt"></i> Prayer Wing
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div class="col-md-3 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu">
              <h4 class="footer-widget-title">Nubs Uenr</h4>
              <ul>
                <li>
                  <i className="bi bi-house-door-fill"></i><Link to='/' style={{textDecoration:'none'}}>Home</Link> 
                </li>
                <li>
                  <i class="bi bi-credit-card-2-front-fill"></i><Link to='/about' style={{textDecoration:'none'}}>About Us</Link>
                </li>
                <li>
                  <i class="bi bi-card-image"></i><Link to='/gallery' style={{textDecoration:'none'}}>Gallery</Link>
                </li>
                <li>
                  <i class="bi bi-card-image"></i><Link to='/donations' style={{textDecoration:'none'}}>Make Donations</Link>
                </li>
                <li>
                  <i class="bi bi-play-fill"></i><a href="https://amgenious.github.io/videos" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>Videos</a>
                </li>
                <li>
                <i class="bi bi-question"></i><a href="https://amgenious.github.io/prayer-counselling/" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>Need Assistance</a>
                </li>
              </ul>
            </div>
            
          </div>

        </div>
        <div className='whatsapp'>
        <a aria-label="Chat on WhatsApp" href="https://wa.me/0500164618"><p>Click Me</p></a>
        </div>
      </div>
    </div>
  </div>

  <div class="mini-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="copyright-text">
            <p>
             All rights reserved. &copy; 2023 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p id="back-to-top" href="#">Top</p>
</footer> 
</div>
     );
}

export default Footer;