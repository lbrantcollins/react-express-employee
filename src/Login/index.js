import React, { Component } from 'react';


class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
    	[e.currentTarget.name]: e.currentTarget.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const login = await fetch('http://localhost:9000/auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedLogin = await login.json();
    console.log(parsedLogin, ' response from login');
    if( parsedLogin.status.message.includes('logged in') ){
      console.log('logged in')
    }
  }

  render(){

    return (
     <form onSubmit={this.handleSubmit}>
      <label>
        Username:
        <input type="text" name='username' onChange={this.handleChange}/>
      </label>
      <label>
        Password:
        <input type="text" name='password' onChange={this.handleChange}/>
      </label>
      <button type='Submit'>
        Register
      </button>
     </form>
   	);
  }

}


export default Login;
