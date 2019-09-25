import ChatBot from "react-simple-chatbot";
// import styled from "styled-components";
// import ReactDOM from "react-dom";
import React, { Component } from "react";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Chat">
        <ChatBot
          headerTitle="Speech Synthesis"
          speechSynthesis={{ enable: true, lang: "en" }}
          steps={[
            {
              id: "1",
              message: "What is your name?",
              trigger: "2"
            },
            {
              id: "2",
              user: true,
              trigger: "3"
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you!",
              trigger: "4"
            },

            {
              id: "4",
              message: "Can I help you?",
              trigger: "5"
            },
            {
              id: "5",
              user: true,
              trigger: "6"
            },
            {
              id: "6",
              message: "bye",
              end: true
            }
          ]}
        />
      </div>
    );
  }
}

export default Chat;
