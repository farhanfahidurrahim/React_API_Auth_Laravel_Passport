import axios from 'axios';
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";

class Register extends Component {

    state={
        name:"",
        email:"",
        password:"",
        password_confirmation:"",
        message:""
    }

    formSubmit =(e)=>{
        e.preventDefault();
        const data={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation,
        }

        axios.post('register',data)
        .then((response)=>{
            localStorage.setItem('token',response.data.token);
            this.setState({
                loggedIn:true
            })
            this.props.setUser(response.data.user)
        })
        .catch((error)=>{
            console.log(error);
        });
    }

  render() {

    //After Register Redirect Profile Page
    if (this.state.loggedIn) {
        return <Navigate to={'/profile'} />
    }

    if (localStorage.getItem('token')) {
        return <Navigate to={'/profile'} />
    }

    return (
      <div>

            <div class="row">
                <div class="col-lg-4 offset-lg-4">
                    <div class="mt-4 p-5 bg-info text-white rounded">
                        <h3>Register Your Account</h3>
                        <form onSubmit={this.formSubmit}>
                            <div class="mb-3 mt-3">
                                <label for="text" class="form-label">Name:</label>
                                <input type="name" class="form-control" name="name" placeholder="Enter Name" required onChange={(e)=>{this.setState({name:e.target.value})}}/>
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" name="email" placeholder="Enter Email" required onChange={(e)=>{this.setState({email:e.target.value})}} />
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Password:</label>
                                <input type="password" class="form-control" name="password" placeholder="Enter Password" required onChange={(e)=>{this.setState({password:e.target.value})}} />
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Confirm Password:</label>
                                <input type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password" required onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} />
                            </div>
                            <button type="submit" class="btn btn-danger">Submit</button><br/><br/>
                            I already have an account <Link to="/login">Login Now!</Link>
                        </form>
                    </div>
                </div>
            </div>

      </div>
    )
  }
}

export default Register