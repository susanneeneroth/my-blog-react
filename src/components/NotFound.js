import { Link } from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div>
          <h2>Sorry this page cannont be found!</h2>
          <Link to="/">Home</Link>
        </div>
     );
}
 
export default NotFound;