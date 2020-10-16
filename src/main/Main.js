import React, { Component } from "react";

import MessageList from "./messages/MessageList";
import MessagePost from "./messages/MessagePost";

export default class Main extends Component {
  state = {
    userName: "Anonym",
    allMessages: [],
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const userByIdResponse = await fetch(`/api/users/${this.props.userId}`);
    const { email } = await userByIdResponse.json();

    const allMessagesResponse = await fetch("/api/messages/all");
    const allMessages = await allMessagesResponse.json();

    this.setState({
      userName: email,
      allMessages,
    });
  }

  render() {
    return (
      <article>
        <h1>Hi, {this.state.userName}</h1>
        <MessageList messages={this.state.allMessages} />
        <MessagePost />
      </article>
    );
  }
}
