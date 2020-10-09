import React from 'react';
import '../App.css';

const Select = ({onChange, selectOption}) => {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div>
      <select onChange={handleChange}>
      {selectOption.map(({ label, value }) => (
        <option key={value} label={label} value={value}>
          {label}
        </option>
      ))}
      </select>
    </div>
  )
}

export default Select;