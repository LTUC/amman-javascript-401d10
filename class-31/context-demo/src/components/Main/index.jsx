import React, { Component } from 'react'
import ThemeButton from '../ThemeButton'
import './main.css'
import Form from '../Form'
import { ThemeContext } from '../../context/theme'
import Values from '../../components/Values';
export default class Main extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <main className = {this.context.mode}>
      <section>
      <Form/>
      <ThemeButton/>
      </section>
      <Values />
      </main>
    )
  }
}
