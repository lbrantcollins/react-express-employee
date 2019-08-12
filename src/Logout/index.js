import React, { Component } from 'react';


class Logout extends Component {
  constructor(){
    super();
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const login = await fetch('http://localhost:9000/auth/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    {this.props.loginStatus()}

  }

  render(){

    return (

      <form onSubmit={this.handleSubmit}>
        <button type='Submit'> Logout </button>
      </form>


       );
  }

}

export default Logout
