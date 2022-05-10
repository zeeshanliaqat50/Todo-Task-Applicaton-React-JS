import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
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
        fetch("https://localhost:7138/api/Account/login", requestOptions)
        .then((response) => response.json())
          .then((response) => {console.log(response);
          if(response.status===true)
          {
            alert("Successfuly logged in");
            localStorage.setItem('jwt',response.jwt);
            window.location.href = "/todo";

          }
          else{
            alert("Invalid Credentials")
          }
        }).catch(err=>  {
          console.log(err);
          alert("Something went wrong")
        })
       
      
      };
  render() {
    return (
        <div>
        <form className="main-form">
          <h2>Login Form</h2>
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
            <input type="button" name="" value="Login" onClick={this.submit} />
          </div>
        </form>
      </div>
    )
  }
}
