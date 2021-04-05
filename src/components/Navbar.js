import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
         <Link to="/"><h1 className="logo-link">My blog</h1></Link>
            <div className="navbar-links">
              <Link to="/">Home</Link>
              <Link to="/addblog">Add blog</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;