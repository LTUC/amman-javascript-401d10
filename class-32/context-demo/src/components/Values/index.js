import React, { useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import { FruitContext } from '../../context/fruits';
import './values.css';
export default function Values(props) {
  const themeContext = useContext(ThemeContext);
  const fruitContext = useContext(FruitContext);
  return (
    <aside className="values">
      <h2 className={`${themeContext.mode} values`}>Current mode: {themeContext.mode}</h2>
      <h3>Added Fruits</h3>
      {fruitContext.data.map((fruit) => (
        <p key={fruit.name + fruit.cal}>
          {fruit.name} : {fruit.cal}
        </p>
      ))}
    </aside>
  );
}
// export default class Values extends Component {
//   render() {
//     return (
//       <aside className="values">
//         <ThemeContext.Consumer>
//           {(theme) => (
//             <h2 className={`${theme.mode} values`}>Current mode: {theme.mode}</h2>
//           )}
//         </ThemeContext.Consumer>
//         <FruitContext.Consumer>
//           {(fruitsContext) =>
//             fruitsContext.data.map((fruit) => (
//               <p>
//                 {fruit.name} : {fruit.cal}
//               </p>
//             ))
//           }
//         </FruitContext.Consumer>
//       </aside>
//     );
//   }
// }
