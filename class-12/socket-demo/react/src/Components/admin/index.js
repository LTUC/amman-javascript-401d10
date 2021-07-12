import React from 'react';
import Ticket from './ticket';
import './admin.css';
import io from 'socket.io-client';
const socket = io('localhost:5000/', { transports: ['websocket'] });
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffName: '',
      tickets: [],
      onlineStaff: [],
    };
  }
  componentDidMount() {
    // run once when component is mounted
    const staffName = prompt("WHAT's your name?");
    this.setState({ staffName });
    socket.on('connect', () => {
      //1a
      socket.emit('join', { name: staffName });
      socket.on('newTicket', (payload) => {
        this.setState({ tickets: [...this.state.tickets, payload] });
      });
      socket.on('onlineStaff', (payload) => {
        this.setState({ onlineStaff: [...this.state.onlineStaff, payload] });
      });
      socket.on('offlineStaff', (payload) => {
        this.setState({
          onlineStaff: this.state.onlineStaff.filter((staff) => staff.id !== payload.id),
        });
      });
    });
  }
  handleClaim = (id, socketId) => {
    console.log(socketId);
    socket.emit('claim', { id, name: this.state.staffName, studentId: socketId });
  };
  render() {
    return (
      <main className="admin-container">
        <section id="container">
          <h2>Opened Tickets</h2>
          <section id="tickets">
            {this.state.tickets.map((ticket) => {
              return (
                <Ticket {...ticket} handleClaim={this.handleClaim} key={ticket.id} />
              );
            })}
          </section>
        </section>
        <aside id="online-staff">
          <h2>Available TAs</h2>
          {this.state.onlineStaff.map((staff) => (
            <h2 key={staff.id}>{staff.name}</h2>
          ))}
        </aside>
      </main>
    );
  }
}

export default Admin;
