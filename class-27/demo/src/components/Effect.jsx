import {useState,useEffect} from 'react'

function Effect(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Component Did Mount
  // useEffect(() => {
  //   console.log('Mounted',count,name)
  //   },[])
  useEffect(() => {
  console.log('Mounted',count,name)
  })
  // component Did Update
  useEffect(() => {
    console.log('Count updated',count)
    if(count === 2){
      props.hide()
    }
  }, [count])
    useEffect(() => {
      console.log('Name updated',name)
    }, [name])
    useEffect(() => {
        console.log('Both Name and Count updated',name,count)
    }, [count, name])

    // Component will unmount
    useEffect(() => {
      return ()=>{
        console.log('Clean up')
      }
  },[])

  // component did mount + component will unmount 
//   useEffect(() => {
//     console.log('COMPONENT DID MOUNT!')
//     return ()=>{
//       console.log('Clean up')
//     }
// },[])
  return (
    <>
  <button onClick={()=>setCount(count + 1)}>{count}</button>
  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
  <p>{name}</p>
  </>
  )
}

export default Effect
