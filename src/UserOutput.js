import React, { Component } from 'react';
import "./UserOutput.css";



class UserOutput extends Component {
    render(){
      return (
          <div className = "UserOutput">
              <p>My username: {this.props.username}</p>
              <p>Just text!!</p>
            
          </div>
      )}; 
};

export default UserOutput;