import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Modal, Button } from 'react-bootstrap';
import style from './addCat.css';
import CatInputs from './catinputs';
import Form from './addCat.js';
import kittens from './media/kittens.jpg';

// Där allt ska synas för uppfödaren, översikt på kullar osv

class Dashboard extends React.Component {

 render() {
   return (
    <div className="card">
    <div className="card-body">
     <h4 class="card-title" id="litter-head">Kull 1</h4> 
     <img class="card-img-top" src="https://images.pexels.com/photos/412463/pexels-photo-412463.jpeg?cs=srgb&dl=daggdjur-djur-husdjur-inhemsk-412463.jpg&fm=jpg" alt="Card image cap"></img>
      <ul className="litters card-text">
       <li>Lisa</li>
       <li>Greta</li>
       <li>Sixten</li>
       <li>Bo</li>
      </ul>
    </div>
    </div>
    );
 }
}

export default Dashboard;
