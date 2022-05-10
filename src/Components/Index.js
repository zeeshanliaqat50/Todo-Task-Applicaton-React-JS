import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Index extends Component {
  render() {
    return (
      <div>
          <h1>Welcome to Todo App</h1>
           <div>
          <Link to="/Registeration">Registeration</Link>
          <br></br>
          <Link to="/login">Login</Link>
        </div>
      </div>
    )
  }
}
