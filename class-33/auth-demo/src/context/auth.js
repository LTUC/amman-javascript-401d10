import React, { Component } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import base64 from 'base-64';
const API = 'https://auth-server-401.herokuapp.com';
export const AuthContext = React.createContext();
export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: {},
    };
  }

  componentDidMount() {
    // get the token from the browser cookies
    const token = cookie.load('auth');
    this.validateToken(token);
  }
  validateToken = (token) => {
    // dont verify in the frontend!!
    // const user = jwt.verify(token,'secret')
    if (token !== 'null') {
      const user = jwt.decode(token);
      console.log(token, user);
      this.setLoginState(true, token, user);
    } else {
      this.setLoginState(false, null, {});
    }
  };
  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    this.setState({ token, loggedIn, user });
  };
  login = async (username, password) => {
    // headers{authorization: "Basic sdfsdfsdf="}
    try {
      const response = await superagent
        .post(`${API}/signin`)
        .set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
      console.log(response.body);
      this.validateToken(response.body.token);
    } catch (error) {
      console.error('LOGIN ERROR', error.message);
    }
  };
  logout = () => {
    this.setLoginState(false, null, {});
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, login: this.login, logout: this.logout }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
