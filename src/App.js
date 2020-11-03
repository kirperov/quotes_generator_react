import React, { Component, Fragment }  from 'react';
import Form from './components/Form';
import ShowQuotes from './components/ShowQuotes';
import WithErrorHandler from './components/WithErrorHandler';
import {main} from './components/quoteGenerator.js';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generatedQuotes: []
    };
  }

  callback = (nbTheme, nbQuotes, quotes) => {
    var newQuotes = main(nbTheme, nbQuotes, quotes);
    this.setState({ generatedQuotes:  newQuotes});
  }
 
  render() {
    return (
      <Fragment>
       
        <div className="container col-md-12">
          <div className="col-md-4">
            <h1>Générateur de citations</h1>
          </div>
          <Form parentCallback={this.callback}/>
          <WithErrorHandler><ShowQuotes quotes={this.state.generatedQuotes}/></WithErrorHandler>
        </div>
      
      </Fragment>
    );
  }
}

export default App;
