import React  from 'react';

const ButtonGenerate = ({onClick}) => {
      const onClickButton  = event => {
            event.preventDefault();
            onClick();
      }
      return (
            <button id="generate" className="btn btn-success mt-2" onClick={onClickButton} >Générer</button>
      )
}

export default ButtonGenerate;
