import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import axios from 'axios';

class Forgot extends Component {

  state={
    email:"",
    message:""
  }

  formSubmit=(e)=>{
    e.preventDefault();
    const data={
      email:this.state.email,
    }

    axios.post('forgotpassword',data)
    .then((response)=>{
      this.setState({message:response.data.message})
      document.getElementById("forgotform").reset();
    })
    .catch((error)=>{
      this.setState({message:error.response.data.message})
    });
  }

  render() {

    if (localStorage.getItem('token')) {
      return <Navigate to={'/profile'} />
    }

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
                      <h3>Recover Your Account</h3>
                      <form onSubmit={this.formSubmit} id="forgotform">
                        {error}
                          <div class="mb-3 mt-3">
                              <label for="email" class="form-label">Email:</label>
                              <input type="email" class="form-control" name="email" placeholder="Enter Email" onChange={(e)=>{this.setState({email:e.target.value})}} required />
                          </div>
                          <button type="submit" class="btn btn-danger">Submit</button><br/><br/>
                      </form>
                  </div>
              </div>
          </div>

      </div>
    )
  }
}

export default Forgot