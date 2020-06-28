import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Modal, Button } from 'react-bootstrap';
import style from './addCat.css';
import CatInputs from './catinputs';
import Form from './addCat.js';
import kittens from './media/kittens.jpg';
import { KittenContext } from './store/kittenStore';

// Där allt ska synas för uppfödaren, översikt på kullar osv

const Dashboard = (props) => {
  
  const [ catState, setCatState ] = useContext(KittenContext);

  
  return (
    <>
      {catState.map((cat) => {
        return <div className="card">
          <div className="card-body">
            <h4 className="card-title" id="litter-head">
              Kull: {litter}
              Ras: {breed}
            </h4>
            <img
              className="card-img-top"
              src="https://images.pexels.com/photos/412463/pexels-photo-412463.jpeg?cs=srgb&dl=daggdjur-djur-husdjur-inhemsk-412463.jpg&fm=jpg"
              alt="Card image cap"
            ></img>
            <ul className="litters card-text">
              <li>Name: {cat.name}</li>
              <li>Sex: {cat.sex}</li>
              <li>Weight: {cat.weight}</li>
            </ul>
          </div>
        </div>
      })};
    </>
  );
};

export default Dashboard;
