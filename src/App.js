import React, { Component }  from 'react';
import Form from './components/Form'
import ShowQuotes from './components/ShowQuotes'
import './App.css';
import {main} from './components/quoteGenerator.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generatedQuotes: []
    };
  }

  callback = (nbTheme, nbQuotes) => {
    var newQuotes = main(nbTheme, nbQuotes);
    this.setState({ generatedQuotes:  newQuotes});
  } 
 
  render() {
    return (
      <div className="App">
        <div className="container col-md-12">
          <div className="col-md-4">
            <h1>Générateur de citations</h1>
          </div>
          <Form parentCallback={this.callback}/>
          <ShowQuotes quotes={this.state.generatedQuotes}/>
        </div>
      </div>
    );
  }
}

export default App;
