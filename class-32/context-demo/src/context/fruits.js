import React, { useState } from 'react';
export const FruitContext = React.createContext();
export default function Fruits(props) {
  const [data, setData] = useState([]);
  function updateFruits(fruitData) {
    setData([...data, fruitData]);
  }

  return (
    <FruitContext.Provider value={{ data, updateFruits }}>
      {props.children}
    </FruitContext.Provider>
  );
}
// export default class Fruits extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//     };
//     this.updateFruits = this.updateFruits.bind(this);
//   }
//   updateFruits(data) {
//     this.setState({ data: [...this.state.data, data] });
//   }

//   render() {
//     return (
//       <FruitContext.Provider
//         value={{ data: this.state.data, updateFruits: this.updateFruits }}
//       >
//         {this.props.children}
//       </FruitContext.Provider>
//     );
//   }
// }
