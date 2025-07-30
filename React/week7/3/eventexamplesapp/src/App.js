import CurrencyConvertor from './CurrencyConvertor';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayHello = () => {
    alert('Hello! Value Incremented.');
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handlePress = (e) => {
    alert('I was clicked');
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome('Welcome!')}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handlePress}>OnPress</button>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;

