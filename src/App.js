import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Form from './addCat.js';
import style from './addCat.css';

import { KittenStoreProvider } from './store/kittenStore';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends Component {
//Här ska det kanske vara kod som uppdaterar varje ny kull med katter som läggs till från add Cat, i ett eget "card" i Dashboard 

  render() {
    return(
      <>
      <KittenStoreProvider>
     <Router>
       <h1>Kattunge kalendern</h1>
          <nav>
            <ul class="nav">
              <li class="nav-item"><Link to={'/'} className="nav-link">Hem</Link></li>
              <li class="nav-item"><Link to={'/newcat'} className="nav-link">Ny katt</Link></li>
            </ul>
          </nav>
        <Switch>
           <Route exact path='/' component={Dashboard} />
           <Route path='/newcat' component={Form}/>
        </Switch>
     </Router>
     </KittenStoreProvider>
     </>
    );
  }
}
export default App;
