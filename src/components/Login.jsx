import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";
  import axios from 'axios';

 class Login extends Component {

    state={
        email:"",
        password:"",
        message:"",
    }

//After form Submit
formSubmit =(e)=>{
    e.preventDefault();
    const data={
        email:this.state.email,
        password:this.state.password
    }

    axios.post('login',data)
      .then((response)=> {
        localStorage.setItem('token',response.data.token);
        this.setState({
            loggedIn:true
        })
        this.props.setUser(response.data.user)
      })
      .catch((error)=> {
        this.setState({message:error.response.data.message})
      });
}



  render() {

    //After Login Redirect Profile Page
    if (this.state.loggedIn) {
        return <Navigate to={'/profile'} />
    }

    if (localStorage.getItem('token')) {
        return <Navigate to={'/profile'} />
    }

    //Login Error Message
    let error="";
    if (this.state.message) {
      error=(
        <div>
          <div class="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        </div>
      )
    }

    return (
        <div>

            <div class="row">
                <div class="col-lg-4 offset-lg-4">
                    <div class="mt-4 p-5 bg-info text-white rounded">
                        <h3>Login Your Account</h3>
                        {error}
                        <form onSubmit={this.formSubmit}>
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter Email" name="email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter Password" name="password" required onChange={(e)=>{this.setState({password:e.target.value})}} />
                            </div>
                            <button type="submit" class="btn btn-danger">Login</button><br/><br/>
                            I don't have an account <Link to="/register">Register Now!</Link><br/>
                            Forget my password <Link to="/forgot-password">Forgot Password!</Link><br/>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
  }
}

export default Login