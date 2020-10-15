import React, { Component } from "react";

import Auth from "./auth/Auth";
import Main from "./main/Main";
import "./App.css";

class App extends Component {
  state = {
    isAuthorized: false,
    isLoginPage: true,
    userId: null,
  };

  constructor(props) {
    super(props);
  }

  handleLogin = async values => {
    const { email, password } = values;
    const options = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    try {
      const authResponse = await fetch("/api/auth/login", options);
      const authData = await authResponse.json();
      const { _id } = authData;

      this.setState({
        isAuthorized: true,
        userId: _id,
      });
    } catch (e) {
      alert("ERROR");
      console.error(e);
    }
  };

  handleRegister = async values => {
    const { email, password } = values;
    const options = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    try {
      const response = await fetch("/api/users/register", options);
      const result = await response.json();
      console.log("Registration result", result);
    } catch (e) {
      alert("ERROR");
      console.error(e);
    }
  };

  toggleLoginRegister = event => {
    event.preventDefault();

    this.setState(prevState => {
      return { isLoginPage: !prevState.isLoginPage };
    });
  };

  checkSession = () => {
    // TODO: check if session exist
    // fetch();
  };

  componentDidMount() {
    this.checkSession();
  }

  render() {
    return (
      <div className="App">
        {this.state.isAuthorized ? (
          <Main userId={this.state.userId} />
        ) : (
          <Auth
            isLoginPage={this.state.isLoginPage}
            handleLogin={this.handleLogin}
            handleRegister={this.handleRegister}
            toggleLoginRegister={this.toggleLoginRegister}
          />
        )}
      </div>
    );
  }
}

export default App;
