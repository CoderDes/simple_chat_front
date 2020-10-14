import React, { Component } from "react";

import { AuthWrapper } from "./styles.js";
import Login from "./Login";
import Register from "./Register";

export const Auth = props => (
  <AuthWrapper>
    <h1>Login</h1>
    <Login />
    <h2>Registration</h2>
    <Register />
  </AuthWrapper>
);
  }
}
