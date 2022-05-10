import React, { Component } from "react";
import "./Registeration.css";

export default class Registeration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
      redirect  : false
    };
  }
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  submit = () => {
    console.log(this.state);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    };
    fetch("https://localhost:7138/api/Account/signup", requestOptions)
      .then((response) => response.json())
      .then((response) =>{ 
        console.log(response);
       
        if(response.status==='true')
        {
          alert("Suceesfully Registered, please log in now")
          window.location.href = "/login";
        }
        else{
          alert(response.title);
        }
      })
      .catch((error) => console.log("error"));
  };
  render() {
    return (
     
      <div>
        <form className="main-form">
          <h2>Registeration Form</h2>
          <div>
            <label>First Name</label> <br></br>
            <input type="text" name="firstName" onChange={this.handleChange} />
          </div>
          <div>
            <label>Last Name</label> <br></br>
            <input type="text" name="lastName" onChange={this.handleChange} />
          </div>
          <div>
            <label>Email</label> <br></br>
            <input type="email" name="email" onChange={this.handleChange} />
          </div>

          <div>
            <label>Password</label> <br></br>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Confirm Password</label> <br></br>
            <input
              type="password"
              name="confirmpassword"
              onChange={this.handleChange}
            />
          </div>
          
          <div>
            
            <input type="button" name="" value="Register" onClick={this.submit} />
          </div>

         
        </form>
      </div>
    );
  }
}
