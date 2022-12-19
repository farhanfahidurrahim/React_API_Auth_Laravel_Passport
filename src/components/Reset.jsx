import React, { Component } from 'react'
import {
    BrowserRouter as Router, Link
} from "react-router-dom";
import axios from 'axios';

class Reset extends Component {

    state={
        token:"",
        email:"",
        password:"",
        password_confirmation:"",
        message:"",
    }

    formSubmit=(e)=>{
        e.preventDefault();
        const data={
          token:this.state.token,
          email:this.state.email,
          password:this.state.password,
          password_confirmation:this.state.password_confirmation,
        }
    
        axios.post('resetpassword',data)
        .then((response)=>{
          this.setState({message:response.data.message})
          document.getElementById("formsubmit").reset();
        })
        .catch((error)=>{
          this.setState({message:error.response.data.message})
        });
    }

  render() {

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
                        <h3>Reset Your Password</h3>
                        {error}
                        <form onSubmit={this.formSubmit} id="formsubmit">
                            <div class="mb-3 mt-3">
                                <label for="text" class="form-label">Pin Code:</label>
                                <input type="text" class="form-control" name="token" placeholder="Enter Code" onChange={(e)=>{this.setState({token:e.target.value})}} required />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" name="email" placeholder="Enter Email" onChange={(e)=>{this.setState({email:e.target.value})}} required/>
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Password:</label>
                                <input type="password" class="form-control" name="password" placeholder="Enter Password" onChange={(e)=>{this.setState({password:e.target.value})}} required/>
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Confirm Password:</label>
                                <input type="password" class="form-control" placeholder="Confirm Password" name="password_confirmation" onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} required/>
                            </div>
                            <button type="submit" class="btn btn-danger">Submit</button><br/><br/>
                            Already have an account <Link to="/login">Login Now!</Link>
                        </form>
                    </div>
                </div>
            </div>

      </div>
    )
  }
}

export default Reset