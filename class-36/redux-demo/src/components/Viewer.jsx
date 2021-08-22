import React from 'react'
import {connect} from 'react-redux';
import {removePerson} from '../store/people'
function Viewer(props) {
  return (
    <div>
      <p>THE Count is {props.count}</p>
      <ul>
        {
          props.people.map(p=>{
            return <li key={p} onClick={()=>props.removePerson(p)}>{p}</li>
          })
        }
      </ul>
    </div>
  )
}
const mapStateToProps = (state)=>{
  console.log("STATE???",state)
  return state.people;
}
const mapDispatchToProps = {removePerson};
//HOC??
export default connect(mapStateToProps,mapDispatchToProps)(Viewer);
