import React from 'react';
import PropTypes from 'prop-types';
import styled from './addCat.css';
import Form from './addCat.js';

// Här syns vilka ny inputs (forms) som skapats, läggs till på "Lägg till i Form-componenten"

const CatInputs = ({ idx, catState, handleCatChange }) => {
 const catId = `name-${idx}`;
 const sexId = `sex-${idx}`;
 const weightId = `weight-${idx}`;

  return (
      <div key={`cat-${idx}`}>
        <label htmlFor={catId} id="cat-name">{`Kattunge: ${idx + 1}`}</label>
        <input
          type="text"
          name={catId}
          data-idx={idx}
          id={catId}
          className="name form-control"
          value={catState[idx].name}
          onChange={handleCatChange}
        />

        <label htmlFor={sexId}>Kön: </label>
        <input
          type="text"
          name={sexId}
          data-idx={idx}
          id={sexId}
          className="sex form-control"
          value={catState[idx].sex}
          onChange={handleCatChange}
        />

        <label htmlFor={catId}>Vikt: </label>
        <input
          type="text"
          name={weightId}
          data-idx={idx}
          id={weightId}
          className="weight form-control"
          value={catState[idx].weight}
          onChange={handleCatChange}
        />
      </div>
    );
};
CatInputs.propTypes = {
  idx: PropTypes.number,
  catState: PropTypes.array,
  handleCatChange: PropTypes.func,
};
export default CatInputs;
