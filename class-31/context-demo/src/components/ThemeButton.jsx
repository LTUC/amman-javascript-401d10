import React, { Component } from 'react'
import {ThemeContext} from '../context/theme'
export default class ThemeButton extends Component {
  static contextType = ThemeContext;  //this.context will have the value from the consumer
  render() {
    return (
     <button onClick={this.context.toggleMode}> {this.context.mode === 'dark'? "light" : "dark"}</button>
    )
  }
}
