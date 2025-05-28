import brandlogo from '../public/brand_logo.png';
import { NavLink } from 'react-router-dom'; // Change from Link to NavLink

const Navigation = () => { 
return ( 
    <nav className="container">
          <div className="logo">
            <NavLink to="/"><img src={brandlogo} alt="Logo" /></NavLink>
          </div>
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
            <li><NavLink to="/shop" className={({ isActive }) => isActive ? "active-link" : ""}>Shop</NavLink></li>
            <li><NavLink to="/location" className={({ isActive }) => isActive ? "active-link" : ""}>Location</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
          </ul>
          <button><NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}>Login</NavLink></button>
    </nav>
);
}
export default Navigation;