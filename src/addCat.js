import React, { Component, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import style from './addCat.css';
import CatInputs from './catinputs';
import { KittenContext } from './store/kittenStore';


// Formulär som skapar varje ny katt
// CHatten funkar inte hos mig
// aha.. Konstigt

const Form = () => {

  const [ catState, setCatState, ] = useContext(KittenContext);

    const [litterState, setLitterState] = useState({
        litter: '',
        breed: '',
    });

    const handleLitterChange = (e) => setLitterState({
        ...litterState,
        [e.target.name]: [e.target.value],
    });

    const blankCat = { name: '', sex: '', weight: '' };
    // Den här catState finns i store
    // const [catState, setCatState] = useState([
    //     {  name: '', sex: '', weight: '' }, 
    // ]);

    const addCat = () => {
        setCatState([...catState, { ...blankCat }]);
    };

    const handleCatChange = (e, property) => {
        const updatedCats = [...catState];
        console.log("Index", e.target.dataset.idx)
        console.log("Classname", e.target.className)
        console.log("Value", e.target.value)

        // updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
        // Istället för classNamet så använder vi våran egna property
        updatedCats[e.target.dataset.idx][property] = e.target.value;

        console.table("updatedCats", updatedCats)

        setCatState(updatedCats);
    };


 return (
  <div className="form-group">
  <form className="form">

    <div>
        <label htmlFor="owner">Kull: </label>
        <input
          type="text"
          className="form-control"
          name="litter"
          id="owner"
          value={litterState.litter}
          onChange={handleLitterChange}
           />
        </div>

        <div>
        <label htmlFor="description">Ras: </label>
        <input
          type="text"
          className="form-control"
          name="description"
          id="description"
          vale={litterState.breed}
          onChange={handleLitterChange}
          />
        </div>

        {/* Här ska det skickas vidare sen */}
        <div>
        <input
          type="button"
          id="btn-add"
          class="btn btn-info"
          value="Lägg till kattunge"
          onClick={addCat}
        />
        </div>


        <div className="cats">
        {
          catState.map((val, idx) => (
           <CatInputs
             key={`cat-${idx}`}
             idx={idx}
             catState={catState}
             handleCatChange={handleCatChange}
           />
             ))
            }
         </div>

        <div className="form-group">
        <input type="submit" class="btn btn-info" value="Lägg till" />
       </div>
      </form>
      </div>
 );
};

export default Form;
