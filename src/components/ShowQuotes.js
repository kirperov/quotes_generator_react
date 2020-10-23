import React from 'react';
import '../App.css';

const ShowQuotes = quotes => {
  const listQuotes = quotes.quotes;
  const renderListQuotes = listQuotes.map((quote) =>
      <li key={quote}>{quote.join(' ')}</li>
  );
  return (
    <div className="col-md-8">
        <div id="quotes" className="bg-light mt-3 col-md-6">
          <ul>{renderListQuotes}</ul>
        </div>
    </div>
  )
}

export default ShowQuotes;