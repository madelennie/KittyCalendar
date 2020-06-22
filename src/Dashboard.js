import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Modal, Button } from 'react-bootstrap';
import style from './addCat.css';
import CatInputs from './catinputs';
import Form from './addCat.js';

class Dashboard extends React.Component {

 render() {
   return (
    <div>
     <h1>Kull 1</h1>
      <ul>
       <li>Lisa</li>
       <li>Greta</li>
       <li>Sixten</li>
       <li>Bo</li>
      </ul>
    </div>,

    <div>
      <h1>Nya katter</h1>
        <ul>
         <li>{catState[idx].name}</li>
        </ul>
    </div>
    );
 }
}

export default Dashboard;
