import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import NewCat from './addCat.js';
import Form from './popup.js';
import style from './addCat.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return(
     <Router>
      <div>
       <h1>Kattunge kalendern</h1>
       <nav>
       <ul className="navbar">
            <li><Link to={'/'} className="nav-link">Hem</Link></li>
            <li><Link to={'/newcat'} className="nav-link">Ny katt</Link></li>
          </ul>
          </nav>
          <Switch>
           <Route exact path='/' component={Dashboard} />
           <Route path='/newcat' component={NewCat}/>
          </Switch>
      </div>
     </Router>
    );
  }
}
export default App;
