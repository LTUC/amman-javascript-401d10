// import { Component } from 'react';
// import Main from './components/Main';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       greetings: 'hello world',
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(e) {
//     console.log('THIS??', this);
//     this.setState({ greetings: `hello ${e.name} from App` });
//   }
//   render() {
//     return <Main greetings={this.state.greetings} changeGreetings={this.handleChange} />;
//   }
// }

// export default App;

import Main from './components/Main';
import './App.scss';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({ greetings: 'Hello World' });
  function handleChange(e) {
    setState({ greetings: `hello ${e.name} from App` });
  }
  return <Main greetings={state.greetings} changeGreetings={handleChange} />;
}

export default App;
