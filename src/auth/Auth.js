import React from "react";

import { AuthWrapper } from "./styles.js";
import Login from "./Login";
import Register from "./Register";

const Auth = props => (
  <AuthWrapper>
    {props.isLoginPage ? (
      <React.Fragment>
        <h1>Login</h1>
        <Login handleSubmit={props.handleLogin} />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <h1>Registration</h1>
        <Register handleSubmit={props.handleRegister} />
      </React.Fragment>
    )}
    <button onClick={props.toggleLoginRegister}>
      Go to {props.isLoginPage ? "registration" : "login"}
    </button>
  </AuthWrapper>
);

export default Auth;
