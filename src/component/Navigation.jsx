import brandlogo from '../public/brand_logo.png';
import { Link } from 'react-router-dom';

const Navigation = () => { 
return ( 
    <nav className="container">
          <div className="logo">
            <Link to="/"><img src={brandlogo} alt="Logo" /></Link>
          </div>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/location">Location</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <button><Link to="/login">Login</Link></button>
    </nav>
);
}
export default Navigation;