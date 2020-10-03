import React from 'react';
import '../App.css';

const ShowQuotes = quote => {
      return (
        <div className="col-md-8">
            <div id="quotes" className="bg-light mt-3 col-md-6">{quote.quote}</div>
        </div>
      )
}

export default ShowQuotes;