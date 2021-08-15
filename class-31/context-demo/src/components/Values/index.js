import React, { Component } from 'react';
import { ThemeContext } from '../../context/theme';
import { FruitContext } from '../../context/fruits';
import './values.css';
export default class Values extends Component {
  render() {
    return (
      <aside className="values">
        <ThemeContext.Consumer>
          {(theme) => (
            <h2 className={`${theme.mode} values`}>Current mode: {theme.mode}</h2>
          )}
        </ThemeContext.Consumer>
        <FruitContext.Consumer>
          {(fruitsContext) =>
            fruitsContext.data.map((fruit) => (
              <p>
                {fruit.name} : {fruit.cal}
              </p>
            ))
          }
        </FruitContext.Consumer>
      </aside>
    );
  }
}
