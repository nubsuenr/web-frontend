import { Link } from 'react-router-dom';

function Nav() {
    return ( 
//      <header id='top'>
//     <nav>
//     <input type="checkbox" name="" id="check" />

// <div class="containe">
//     <label for="check">
//         <i class="bi bi-x-lg" id="times"></i>
//         <i class="bi bi-arrow-bar-right" id="bars"></i>
//     </label>
//     <div class="head" id='head'>NUBS UENR</div>
//     <ol>
//         <li><Link to='/' style={{textDecoration:'none', color:'white'}} class="nav-link">HOME</Link></li>
//         <li><Link to='/about' style={{textDecoration:'none', color:'white'}} class="nav-link">ABOUT</Link></li>
//         <li><Link to='/gallery' style={{textDecoration:'none', color:'white'}} class="nav-link">GALLERY</Link></li>
//         <li><Link to='/wing' style={{textDecoration:'none', color:'white'}} class="nav-link">WINGS</Link></li>
//         <li><Link to='/donations' style={{textDecoration:'none', color:'white'}} class="nav-link">MAKE DONATIONS</Link></li>
//         <li><a href="https://amgenious.github.io/videos" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'white'}} class="nav-link">VIDEOS</a></li>
//         <li><a href='https://amgenious.github.io/prayer-counselling/'target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'white'}} class="nav-link">NEED ASSISTANCE</a></li>
//     </ol>

// </div>
//     </nav>
//      </header>
<div className='container-fluid navbar' style={{ margin:'0', padding:'0'}}>
<div className='logo' style={{margin:'0', padding:'0'}}>
<Link class="navbar-brand ime" href="#"><img src="images/nubsuenr.png" alt='logo' style={{objectFit:'cover'}} /></Link>
</div>
<div className='nav-links'>
    <nav>
    <ul>
       
        <Link to='/' style={{textDecoration:'none'}} class="nav-link">
        <li><i class="fa-solid fa-house"></i>
            <p>Home</p>
            </li>
        </Link>
    
        
        <Link to='/about' style={{textDecoration:'none'}} class="nav-link">
        <li><i class="fa-solid fa-circle-info"></i>
            <p>About</p>
            </li>
        </Link>    
        
        <Link to='/gallery' style={{textDecoration:'none'}} class="nav-link">
        <li><i class="fa-solid fa-image"></i>
            <p>Gallery</p>
            </li>
        </Link>
        
        <Link to='/donations' style={{textDecoration:'none'}} class="nav-link">
        <li><i class="fa-solid fa-credit-card"></i>
            <p>Pay</p>
            </li>
        </Link>    
        
        <Link to='/media' style={{textDecoration:'none'}} class="nav-link">
        <li><i class="fa-solid fa-book-open"></i>
            <p>Media</p>
            </li>
        </Link>    
        
        <Link to='/help' style={{textDecoration:'none'}} class="nav-link">
        <li><i class="fa-solid fa-question"></i>
            <p>Help</p>
            </li>
        </Link>    
    </ul>
    </nav>
</div>

</div>
     );
}

export default Nav;
