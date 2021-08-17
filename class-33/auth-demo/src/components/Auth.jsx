import React, { Component } from 'react'
import {AuthContext} from '../context/auth'
import {If} from 'react-if';
export default class Auth extends Component {
  static contextType = AuthContext;
  render() {
let okToRender = this.context.loggedIn && this.props.capability ? this.context.user?.capabilities.includes(this.props.capability):false;
    return (
      <If condition={okToRender}>
        <div>{this.props.children}</div>
      </If>
    )
  }
}
