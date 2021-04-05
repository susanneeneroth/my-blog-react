import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddBlog from './components/AddBlog';
import About from './pages/About'
import Contact from './pages/Contact';
import Details from './components/Details';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Dashboard from './components/Dashboard'
import Prefrences from './components/Preferences'
import { useState } from 'react';
import Login from './components/Login/Login'

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
        <BrowserRouter>
          <Switch> 
            <Route path="/dashboard">
              <Dashboard /> 
            </Route>
            <Route path="/preferences">
              <Prefrences/>
            </Route>
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
            <Route path="*">
              <NotFound />
            </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
  </Router>
  );
}

export default App;
