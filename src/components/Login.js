import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";

const Login = (props) => {
  const [state, setState] = useState({
    credentials: {
      username: "",
      password: "",
    },
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect((e)=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log("There was an error", err);
      });
  } 
  );

  const handleChange = (e) => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  
    
  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form  className="loginForm">
          <input
          data-testid="username"
            type="text"
            name="username"
            value={state.credentials.username}
            onChange={handleChange}
          />
          <input
          data-testid="password"
            type="password"
            name="password"
            value={state.credentials.password}
            onChange={handleChange}
          />
          <button className="loginButton">Log in</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.