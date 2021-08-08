
function Main({greetings,changeGreetings}) {
function handleClick(){
  changeGreetings({name:"mahmooud"})
}
  return (
    <>
     <h1>{greetings}</h1>
     <button onClick={handleClick}>Change Greetings</button> 
    </>
  )
}

export default Main
