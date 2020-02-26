import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={Login} />        
          
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
