import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

class Nav extends Component {

    state={
        loggedout:""
    }

    logout= () =>{
        localStorage.clear();
        this.props.setUser(null);
    }

  render() {

    let buttons;
    let profile;
    if (localStorage.getItem('token')) {
        buttons=(
            <div>
                <Link class="btn btn-outline-success" to="/" onClick={this.logout}>Logout</Link>
            </div>
        )
        profile=(
            <div>
                <Link class="btn btn-outline-success" to="/profile">Profile</Link>
            </div>
        )
    }else{
        buttons=(
            <div>
                <Link class="btn btn-outline-success" to="/login">Login </Link>
                <Link class="btn btn-outline-success" to="/register"> Register</Link>
            </div>
        )
    }

    return (
      <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">FarhaN</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            {profile}
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        {buttons}
                    </form>
                </div>
            </div>
        </nav>

      </div>
    )
  }
}

export default Nav