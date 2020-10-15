import React, { Component } from "react";

import MessageList from "./messages/MessageList";

export default class Main extends Component {
  state = {
    userName: "Anonym",
    allMessages: [],
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("MAIN DID MOUNT");
    // TODO: http request for get all messages
    const userById = await fetch(
      `http://localhost:3001/api/users/${this.props.userId}`,
    );
    const { email } = userById;
    console.log("EMAIL", email);

    const allMessages = await fetch("http://localhost:3001/api/messages/all");
    console.log("allMessages", allMessages);
  }

  render() {
    return (
      <article>
        <h1>Hi, {this.props.userName}</h1>
        <MessageList />
        <form>
          <textarea></textarea>
          <button>Submit</button>
        </form>
      </article>
    );
  }
}
