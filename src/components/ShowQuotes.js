import React from 'react';

const ShowQuotes = quotes => {
  let html=null;
  const listQuotes = quotes.quotes;
  const renderListQuotes = listQuotes.map((quote) =>
    <li key={quote}>{quote.join(' ')}</li>
  );
  if(listQuotes.length === 0) {
      html =  
        <div  className="mt-3 col-md-6">
            <div className="alert alert-primary" role="alert">
                Veillez choisir le thème et nombre de citations
          </div>
        </div>;
  } else {
    html = 
    <div id="quotes" className="bg-light mt-3 col-md-6">
      <ul>{renderListQuotes}</ul>
    </div>;
  }

  return (
    <div className="col-md-8">
      {html}
    </div>
  )
}

export default ShowQuotes;