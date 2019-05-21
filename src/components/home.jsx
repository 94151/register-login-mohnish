import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'
import Dashboard from './dashboard';
import Registration from './registration';
import Login from './login';
import swal from "sweetalert";


class Home extends Component {
    state = { 
        Login_username : "",
        Login_password : "",
        name : "",
        username : "",
        password : "",
        isLogin  : false,
        users : []
     }
    
    routes = [
        { path: '/',
          exact: true,
          sidebar: () => <Login handleChange={this.handleChange}></Login>,
          main: () => <Login></Login>
        },
        { path: '/register',
          sidebar: () => <Registration 
                            handleChange={this.handleChange} 
                            handleRegistration={this.handleRegistration}
                         >
                         </Registration>,
          main: () => <Registration></Registration>
        },
        { path: '/dashboard',
          sidebar: () => <div handleChange={this.handleChange}></div>,
          main: () => <Dashboard></Dashboard>
        }
      ]
    handleChange =(e)=>{
 
        this.setState({[e.target.name] : e.target.value})
    }
    handleRegistration =()=>{
        let newUserData = {
            name : this.state.name,
            username : this.state.username,
            password : this.state.password
        }
        var joined = this.state.users.concat(newUserData);
        this.setState({users : joined});
        swal(`Good Job ${this.state.name}`, "Registration Successfull", "success")
        debugger
        this.props.history.push("/")
    }
    handleLogin =(e)=>{ 
        e.preventDefault();
        return false;
    }
    render() { 
        console.log("user", this.state.users)
        return ( 
            <Router>
            <div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/register">Registration</Link></li>
              <li><Link to="/">Login</Link></li>
            </ul>
            {this.routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
          </Router> 
          );
    }
}
 
export default Home;