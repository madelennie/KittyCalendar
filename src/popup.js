import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Button } from '@progress/kendo-react-buttons';
import { Modal, Button } from 'react-bootstrap';
import Dashboard from './Dashboard';
import style from './addCat.css';


// // class Form extends React.Component {
// //  constructor(props) {
// //    super(props);
// //    this.state = {value: ''};
// //
// //    this.handleChange = this.handleChange.bind(this);
// //    this.handleSubmit = this.handleSubmit.bind(this);
// // }
// //
// // handleChange(e) {
// //  this.setState({value: e.target.value});
// // }
// //
// // handleSubmit(e) {
// //  alert('Katten' + this.state.name.value + 'är tillagd');
// //  e.preventDefault();
// // }
// //
// // render(props) {
// //  return (
// //   // <div class="modal fade" id="myModal" role="dialog">
// //   //   <div class="modal-dialog">
// //   //
// //   //     <div class="modal-content">
// //   //       <div class="modal-header">
// //   //         <button type="button" class="close" data-dismiss="modal">&times;</button>
// //   //         <h4 class="modal-title">Modal Header</h4>
// //   //       </div>
// //   //       <div class="modal-body">
// //   //       <div className="form">
// //   //        <form onSubmit={this.handleSubmit}>
// //   //         <label>
// //   //                Namn:
// //   //                <input
// //   //                 type="text"
// //   //                 name="name"
// //   //                 value={this.state.value.name}
// //   //                 onChange={this.handleChange}
// //   //                 />
// //   //         </label>
// //   //         <label>
// //   //                Kön:
// //   //                <input
// //   //                  type="text"
// //   //                  name="sex"
// //   //                  value={this.state.value.sex}
// //   //                  onChange={this.handleChange}
// //   //                  />
// //   //         </label>
// //   //         <label>
// //   //                Vikt:
// //   //                <input
// //   //                  type="text"
// //   //                  name="weight"
// //   //                  value={this.state.value.weight}
// //   //                  onChange={this.handleChange} />
// //   //         </label>
// //   //              <Button type="submit" value="submit" primary={true}>Lägg till katt</Button>
// //   //        </form>
// //   //       </div>
// //   //       </div>
// //   //       <div class="modal-footer">
// //   //         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
// //   //       </div>
// //   //     </div>
// //   //
// //   //   </div>
// //   // </div>
// //
// //
// //  );
// // }
// // };
//
// export default Form;
