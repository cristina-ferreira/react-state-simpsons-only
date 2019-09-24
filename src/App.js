import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes';
import Lamp from './Lamp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsonsOnly: true
    };
  }

  handleLamp = (l) => {
    this.setState({ simpsonsOnly: l });
  }

  render() {
    const { simpsonsOnly } = this.state;
    return (
      <div className="App">
        <h3>Simpson's only</h3>
        <Lamp handleLamp={this.handleLamp} />
        <Quotes simpsonsOnly={simpsonsOnly} />  
      </div>
    );
  }
}
export default App;
