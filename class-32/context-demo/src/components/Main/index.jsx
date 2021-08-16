import React, { useContext } from 'react'
import ThemeButton from '../ThemeButton'
import './main.css'
import Form from '../Form'
import { ThemeContext } from '../../context/theme'
import Values from '../../components/Values';
export default function Main(props) {
  const themeContext = useContext(ThemeContext)

    return (
      <main className = {themeContext.mode}>
      <section>
      <Form/>
      <ThemeButton/>
      </section>
      <Values />
      </main>
    )
  
}
// export default class Main extends Component {
//   static contextType = ThemeContext;
//   render() {
//     return (
//       <main className = {this.context.mode}>
//       <section>
//       <Form/>
//       <ThemeButton/>
//       </section>
//       <Values />
//       </main>
//     )
//   }
// }
