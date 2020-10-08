import React  from 'react';
import '../App.css';
 

const ButtonGenerate = props => {
      const onClickButton  = event => {
            event.preventDefault();
      }
      return (
            <button id="generate" className="btn btn-success mt-2" onClick={onClickButton} >Générer</button>
      )
}

export default ButtonGenerate;
