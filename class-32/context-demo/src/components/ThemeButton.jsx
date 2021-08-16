import React, { useContext } from 'react'
import {ThemeContext} from '../context/theme'

export default function ThemeButton(props) {
  const themeContext = useContext(ThemeContext)
     return (
      <button onClick={themeContext.toggleMode}> {themeContext.mode === 'dark'? "light" : "dark"}</button>
     )
   
 }
 
// export default class ThemeButton extends Component {
//   static contextType = ThemeContext;  //this.context will have the value from the consumer
//   render() {
//     return (
//      <button onClick={this.context.toggleMode}> {this.context.mode === 'dark'? "light" : "dark"}</button>
//     )
//   }
// }
