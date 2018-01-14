import React from 'react';
import ChatWindow from './ChatWindow.jsx';
import ChatForm from './ChatForm.jsx';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      windowHeight: 0
    }
    this.sendMessage = this.sendMessage.bind(this);
  }
  componentDidMount() {
    this.connection = new WebSocket('ws://localhost:3000/messages');
    this.connection.onmessage = (event) => { 
      let message = JSON.parse(event.data)
      this.setState({
        messages : this.state.messages.concat([message])
      })
    };
  }
  sendMessage(message) {
    this.connection.send(JSON.stringify({message: message}));
  }
  render() {
    return (
      <div>
        <ChatWindow messages={this.state.messages} />
        <ChatForm sendMessage={this.sendMessage} />
      </div>
    )
  }
}

export default Chat;