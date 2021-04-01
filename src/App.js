import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddBlog from './components/AddBlog';
import About from './pages/About'
import Contact from './pages/Contact';
import Details from './components/Details';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> 
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blogs/:id">
              <Details />
            </Route>
            <Route path="/addblog">
              <AddBlog />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
