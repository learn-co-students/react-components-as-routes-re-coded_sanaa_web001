import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
ReactDOM.render((
  
  <Router>
  <div>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" render={()=><h1>You're in!</h1>} />
    <Route exact path="/message" render={()=><h1>Thanks for visiting :)</h1>} />
    <Route exact path="/contacts" render={()=><h1>Contacts!</h1>} />
  </div>
  </Router>),
  document.getElementById('root')
);
