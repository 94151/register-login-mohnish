import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
class Login extends Component {
    state = {  }
    render() { 
        return ( <div className="col">
        <div className="hide-md-lg">
          <p> Log in </p>
        </div>
        <input type="text" name="Login_username" onChange={this.props.handleChange} placeholder="Username" required/><br/>
        <input type="password" name="Login_password" onChange={this.props.handleChange} placeholder="Password" required/><br/>
        <input type="button" value="Login"/>
      </div> );
    }
}
 
export default withRouter(Login);