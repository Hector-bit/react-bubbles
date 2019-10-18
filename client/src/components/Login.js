// import React from "react";

// const Login = () => {
//   // make a post request to retrieve a token from the api
//   // when you have handled the token, navigate to the BubblePage route
//   return (
//     <>
//       <h1>Welcome to the Bubble App!</h1>
//       <p>Build a login page here</p>
//     </>
//   );
// };

// export default Login;

import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // login to retrieve the JWT token
    // add the token to localstorage
    // route to /protected (whatever landing page)
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(res => {
        // console.log(res.data.payload)
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/bubblepage');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    // if (localStorage.getItem('token')) {
    //   return <Redirect to="/login" />;
    // }
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;

