import React from 'react';
import RenderMsgInfo from './RenderMsgInfo';

const ShowQuotes = quotes => {
  let html;
  let renderListQuotes;
  const listQuotes = quotes.quotes;
  if(listQuotes.length === 0) {
      html = <RenderMsgInfo/>
  } else {
      renderListQuotes = listQuotes.map((quote) =>
        <li key={quote}>{quote.join(' ')}</li>
      );
      html = <div id="quotes" className="bg-light mt-3">
                <ol>{renderListQuotes}</ol>
              </div>
  }

  return (
    <div>
      { html }
    </div>
  )
}

export default ShowQuotes;