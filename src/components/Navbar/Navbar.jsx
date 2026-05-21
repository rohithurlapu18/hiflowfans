import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>Hi Flow Fans</div>

      <ul className='nav-links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about-us'>About Us</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/industries'>Industries</Link></li>
        <li><Link to='/client-profile'>Clients</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/contact-us'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar