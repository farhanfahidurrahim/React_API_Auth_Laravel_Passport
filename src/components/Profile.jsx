import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

class Profile extends Component {


  render() {

    let name;
    let email;
    if (this.props.user) {
      name=this.props.user.name;
      email=this.props.user.email;
    }

    //Checking Authorization
    if (!localStorage.getItem('token')) {
      return <Navigate to={'/login'} />
    }

    return (
      <div>

            <div class="row">
                <div class="col-lg-4 offset-lg-4">
                    <div class="mt-4 p-5 bg-info text-white rounded">
                        <h3>Profile Info</h3>
                        <ul class="list">
                          <li>Name: {name}</li>
                          <li>Email: {email}</li>
                        </ul>
                    </div>
                </div>
            </div>

      </div>
    )
  }
}

export default Profile