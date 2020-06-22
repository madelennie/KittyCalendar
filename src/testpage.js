import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './addCat.css';

import { Button } from '@progress/kendo-react-buttons';

class NewCat extends React.Component {
 constructor(props) {
  super(props);
 }


 render() {
  return (
   <div>
     <div className="dashboard col-xs-6">
     <button variant="primary" size="lg">
      Large button
    </button>
  </div>

<div>
  <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Example select</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Example multiple select</label>
      <select multiple class="form-control" id="exampleFormControlSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </form>
  </div>

    <div>
     <h1>Kull 1</h1>
      <ul>
       <li>Lisa</li>
       <li>Greta</li>
       <li>Sixten</li>
       <li>Bo</li>
      </ul>
    </div>
    </div>

  );
 }
 };

export default NewCat;
