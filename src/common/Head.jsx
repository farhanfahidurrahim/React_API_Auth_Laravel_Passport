import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Nav from '../common/Nav';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPassword from '../components/Forgot';
import ResetPassword from '../components/Reset';
import axios from 'axios';

class Head extends Component {

  state={
    user:{}
  }

  componentDidMount()
  {
    //Login User Credentials
    axios.get('user')
      .then((response)=> {
        this.setUser(response.data)
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  setUser=(user)=>{
    this.setState({user:user})
  }

  render() {
    return (
      <Router>
      <div>
        <Nav user={this.state.user} setUser={this.setUser}/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={ <Profile user={this.state.user} /> } />

            <Route path="/login" element={ <Login user={this.state.user} setUser={this.setUser} />} />
            <Route path='/register' element={<Register user={this.state.user} setUser={this.setUser} />}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/reset-password/:id' element={<ResetPassword/>}/>
        </Routes>

      </div>
      </Router>
    )
  }
}

export default Head