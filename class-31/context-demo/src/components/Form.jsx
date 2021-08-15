import React, { Component } from 'react'
import { FruitContext } from '../context/fruits';
export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
       name:"",
       cal:0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.context.updateFruits(this.state)
  }
  handleChange(e){
   this.setState({[e.target.name]:e.target.value})
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={this.state.name} onChange={this.handleChange}/>
        <input name="cal" value={this.state.cal} onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
Form.contextType = FruitContext;