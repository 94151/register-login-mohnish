import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
class Registration extends Component {
    state = {  }
    
    render() { 
        return ( <div className="col">
        <div className="hide-md-lg">
          <p> sign Up </p>
        </div>
        
        <input type="text" name="name" onChange={this.props.handleChange.bind(this)} placeholder="Name" required/><br/>
        <input type="text" name="username" onChange={this.props.handleChange.bind(this)} placeholder="Username" required/><br/>
        <input type="password" name="password" onChange={this.props.handleChange.bind(this)} placeholder="Password" required/><br/>
        <input type="button" onClick={this.props.handleRegistration.bind(this)} value="Sign Up"/>
    
      </div> );
    }
}
 
export default withRouter(Registration);