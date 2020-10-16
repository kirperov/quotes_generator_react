import React from 'react';
import '../App.css';
 
const ShowQuotes = quotes => {
  return (
    <div className="col-md-8">
        <div id="quotes" className="bg-light mt-3 col-md-6">{quotes.quotes}</div>
    </div>
  )
}

export default ShowQuotes;