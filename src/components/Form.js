import React, {useState} from 'react';
import '../App.css';
import Select from './Select';
import ButtonGenerate from './ButtonGenerate';
import {nbTheme, nbQuotes} from './constants.js';
 
const Form = ({parentCallback}) => {
  const [numberTheme, setTheme] = useState(nbTheme);
  const [numberQuotes, setQuote] = useState(nbQuotes);
  function handleChangeTheme(newValueTheme) {
    setTheme(newValueTheme);
  }

  function handleChangeQuote(newValueQuote) {
    setQuote(newValueQuote);
  }
  parentCallback(numberTheme);
  return (
    <div>
      <form>
        <span>Choix Thème</span>
        <Select onChange={handleChangeTheme} selectOption={nbTheme}/>
        <span>Choix Citation</span>
        <Select onChange={handleChangeQuote} selectOption={nbQuotes}/>
        <ButtonGenerate />
      </form>
    </div>
  )
}

export default Form;
