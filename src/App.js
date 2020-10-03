import React, { Component }  from 'react';
import Form from './components/Form'
import ShowQuotes from './components/ShowQuotes'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container col-md-12">
          <div className="col-md-4">
            <h1>Générateur de citations</h1>
              <Form></Form>
          </div>
          <ShowQuotes quote="test"/>
        </div>
      </div>
    );
  }
}

export default App;
