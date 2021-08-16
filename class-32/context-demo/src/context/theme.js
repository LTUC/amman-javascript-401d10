import React, { useState } from 'react';
export const ThemeContext = React.createContext();

export default function Theme(props) {
  const [mode, setMode] = useState('dark');

  function toggleMode() {
    setMode(mode === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

/**
  export default function Theme(props) {
  const [state, setState] = useState({
    mode: 'dark',
  });
  useEffect(() => {
    console.log('after', state.mode);
  }, [state]);
  function toggleMode() {
    console.log('Before', state.mode);
    setState({
      mode: state.mode === 'dark' ? 'light' : 'dark',
    });
  }

  return (
    <ThemeContext.Provider value={{ mode: state.mode, toggleMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

 */

// export default class Theme extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       mode: 'dark',
//       toggleMode: this.toggleMode,
//     };
//   }
//   toggleMode = () => {
//     this.setState({ mode: this.state.mode === 'dark' ? 'light' : 'dark' });
//   };

//   render() {
//     return (
//       <ThemeContext.Provider value={this.state}>
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }
