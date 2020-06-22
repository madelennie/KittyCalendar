import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './addCat.css';
import CatInputs from './catinputs';


const Form = () => {
    const [ownerState, setOwnerState] = useState({
        owner: '',
        description: '',
    });

    const handleOwnerChange = (e) => setOwnerState({
        ...ownerState,
        [e.target.name]: [e.target.value],
    });

    const blankCat = { name: '', sex: '', weight: '' };
    const [catState, setCatState] = useState([
        { ...blankCat },
    ]);

    const addCat = () => {
        setCatState([...catState, { ...blankCat }]);
    };

    const handleCatChange = (e) => {
        const updatedCats = [...catState];
        updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
        setCatState(updatedCats);
    };


 return (
  <div className="form-group">
  <form className="form">

    <div>
        <label htmlFor="owner">Uppfödare: </label>
        <input
          type="text"
          className="form-control"
          name="owner"
          id="owner"
          value={ownerState.owner}
          onChange={handleOwnerChange}
           />
        </div>

        <div>
        <label htmlFor="description">Ägare: </label>
        <input
          type="text"
          className="form-control"
          name="description"
          id="description"
          vale={ownerState.description}
          onChange={handleOwnerChange}
          />
        </div>


        <div>
        <input
          type="button"
          id="btn-add"
          class="btn btn-primary"
          value="Lägg till kattunge"
          onClick={addCat}
        />
        </div>

        <div>
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
        <input type="submit" class="btn btn-primary" value="Lägg till" />
       </div>

      </form>
      </div>
 );
};

export default Form;
