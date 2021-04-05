import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
          <span className="logo-link"><Link to="/"><h1>React project</h1></Link></span>
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