import React from 'react';
import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: '',
    };
    console.log('PROPS', this.props.socket);
  }
  componentDidMount() {
    const studentName = prompt("WHAT's your name?");
    this.setState({ studentName });
    this.props.socket.on('connect', () => {
      this.props.socket.on('claimed', function (payload) {
        alert(`${payload.name} claimed your ticket`);
      });
    });
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...this.state,
      created_at: Date.now(),
    };
    console.log('hello', payload);
    // once the user submit the form we need to emit a ticket so all TAs can see that ticket

    // 1
    this.props.socket.emit('createTicket', payload);
  };
  render() {
    return (
      <main className="container">
        <section className="form-card">
          <form id="questions-form" onSubmit={this.handleSubmit}>
            <input
              className="question"
              type="text"
              name="question"
              placeholder="write your question here..."
              required
              onChange={this.handleChange}
            />
            <label className="lab">
              <input
                type="radio"
                name="type"
                value="lab"
                required
                onChange={this.handleChange}
              />
              lab
            </label>
            <label className="cc">
              <input
                type="radio"
                name="type"
                value="code challenge"
                onChange={this.handleChange}
              />
              cc
            </label>
            <label className="course">
              <input
                type="radio"
                name="course"
                value="201"
                required
                onChange={this.handleChange}
              />
              201
            </label>
            <label className="course">
              <input
                type="radio"
                name="course"
                value="301"
                onChange={this.handleChange}
              />
              301
            </label>
            <label className="course">
              <input
                type="radio"
                name="course"
                value="401js"
                onChange={this.handleChange}
              />
              401js
            </label>
            <label className="course">
              <input
                type="radio"
                name="course"
                value="401py"
                onChange={this.handleChange}
              />
              401py
            </label>
            <label className="course">
              <input
                type="radio"
                name="course"
                value="401java"
                onChange={this.handleChange}
              />
              401java
            </label>
            <button className="question">help!</button>
          </form>
        </section>
      </main>
    );
  }
}

export default Home;
