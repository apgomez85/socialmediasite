import React, { Component } from 'react';

export class User extends Component {
  state = {
    profilePic: null,
    userName: 'Adrian',
    location: 'Dana Point, CA',
    phone: '',
    bio: '',
    jongmin: 'hi my name is Jongmin Kim'
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.userName}</h1>
        <h1>{this.state.location}</h1>
        <h2>{this.state.jongmin}</h2>
      </React.Fragment>
    );
  }
}

export default User;
