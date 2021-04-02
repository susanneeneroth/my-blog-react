import { Link } from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
          <h2>Sorry, something went wrong...</h2>
          <p>This page cannot be found.</p>
          <Link to="/"><button>Back to homepage</button></Link>
        </div>
     );
}
 
export default NotFound;