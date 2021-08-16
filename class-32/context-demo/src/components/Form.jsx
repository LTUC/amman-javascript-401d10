import React, { useContext,useState } from 'react'
import { FruitContext } from '../context/fruits';
export default function Form(props) {
const [state, setState] = useState({
  name:"",
  cal:0
})
const fruitContext = useContext(FruitContext)


  function handleSubmit(e){
    e.preventDefault();
    fruitContext.updateFruits(state)
    setState({
      name:"",
      cal:0
    })
  }
  function handleChange(e){
   setState({...state,[e.target.name]:e.target.value})
  }
  

    return (
      <form onSubmit={handleSubmit}>
        <input name="name" value={state.name} onChange={handleChange}/>
        <input name="cal" value={state.cal} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    )
  
}

// export default class Form extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//        name:"",
//        cal:0
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e){
//     e.preventDefault();
//     this.context.updateFruits(this.state)
//   }
//   handleChange(e){
//    this.setState({[e.target.name]:e.target.value})
//   }
  
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input name="name" value={this.state.name} onChange={this.handleChange}/>
//         <input name="cal" value={this.state.cal} onChange={this.handleChange}/>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }
// Form.contextType = FruitContext;