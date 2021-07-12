export default function Ticket(props){
  return(
    <article className="ticket">
      <h2>{props.question}</h2>
      <p>type:{props.type}</p>
      <p>course: {props.course}</p>
      <p>time:{new Date(props.created_at).toLocaleDateString()}</p>
      <p>Student Name: {props.studentName}</p>
      <button onClick={()=>props.handleClaim(props.id,props.socketId)}>Claim</button>
    </article>
  )
}