import React, {useState} from 'react';
import '../App.css';
import Select from './Select';
import ButtonGenerate from './ButtonGenerate';
import {nbTheme, nbQuotes} from './constants.js';

const Form = ({parentCallback}) => {
  const [numberTheme, setTheme] = useState(nbTheme[0].value);
  const [numberQuotes, setQuote] = useState(nbQuotes[0].value);

  function handleChangeTheme(newValueTheme) {
    setTheme(newValueTheme);
  }

  function handleChangeQuote(newValueQuote) {
    setQuote(newValueQuote);
  }

  function submit() {
    parentCallback(numberTheme, numberQuotes);
  }
  return (
    <div>
      <form>
        <span>Choix Thème</span>
        <Select onChange={handleChangeTheme} selectOption={nbTheme}/>
        <span>Choix Citation</span>
        <Select onChange={handleChangeQuote} selectOption={nbQuotes}/>
        <ButtonGenerate onClick={submit}/>
      </form>
    </div>
  )
}

export default Form;
