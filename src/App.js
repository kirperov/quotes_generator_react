import React, { Component }  from 'react';
import './App.css';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {nbTheme: 0, nbQuote: 1};
    this.handleChangeTeme = this.handleChangeTeme.bind(this);
    this.handleChangeQuote = this.handleChangeQuote.bind(this);
  }

  handleChangeTeme(event) {this.setState({nbTheme: event.target.value});}
  handleChangeQuote(event) {this.setState({nbQuote: event.target.value});}

  render() {
    return (
      <div className="App">
        <div class="container col-md-12">
        <div class="col-md-4">
          <h1>Générateur de citations</h1>
          <span>Choisissez un thème</span>
          <select value={this.state.value} onChange={this.handleChangeTeme} id="themes">
            <option value="0" selected>Thème 1</option>
            <option value="1">Thème 2</option>
          </select>
        </div>
        <div class="col-md-8">
          <span>Choisissez un nombre de citations à générer</span>
          <select value={this.state.value} onChange={this.handleChangeQuote} id="numbers">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button id="generate" class="btn btn-success">Générer</button>
          <div id="quotes" class="bg-light mt-3 col-md-6"></div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
