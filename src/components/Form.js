import React, {useState} from 'react';
import '../App.css';
import Select from './Select';
import ButtonGenerate from './ButtonGenerate';
import {nbTheme, nbQuotes} from './constants.js'
 
const Form = props => {
  const [nbTheme1, setTheme] = useState(nbTheme);
  const [nbQuotes1, setQuote] = useState(nbQuotes);
  function handleChange(newValue) {
    setTheme(newValue);
    console.log(newValue)
  }

 

      return (
        <div>
          <form>
            <span>Choix Thème</span>
            <Select onChange={handleChange} selectOption={nbTheme} ></Select>
            <span>Choix Citation</span>
            <Select selectOption={nbQuotes1}></Select>
            <ButtonGenerate></ButtonGenerate>

          </form>
          <button onClick={(event) => console.log(event.target.value)}></button>
        </div>
      )
}

export default Form;