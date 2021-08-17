import React, { Component } from 'react'
import {AuthContext} from '../context/auth';
import { If,Else,Then } from 'react-if';
export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:"",password:""
    }
  }
  static contextType = AuthContext
  handleChange =(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    this.context.login(this.state.username,this.state.password)
  }
  render() {
    return (
      <If condition={this.context.loggedIn}>
        <Then>
        <button onClick={this.context.logout}>Logout</button>
        </Then>
        <Else>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Enter Username" onChange={this.handleChange} />
          <input type="text" name="password" placeholder="Enter Password" onChange={this.handleChange} />
          <button>Login</button>
        </form>
        </Else>
      </If>
    )
  }
}
