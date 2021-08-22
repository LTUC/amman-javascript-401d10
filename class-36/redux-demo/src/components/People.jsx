import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addPerson,removePerson} from '../store/people';
function People(props) {
  const [name, setName] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    props.addPerson(name)
    e.target.reset()
  }
  function handleChange(e) {
    setName(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  )
}
const mapStateToProps = (state)=>{ return state}
const mapDispatchToProps = {addPerson,removePerson}
export default connect(mapStateToProps,mapDispatchToProps)(People)
