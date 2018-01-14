import React from 'react';
import ChatWindow from './ChatWindow.jsx';
import ChatForm from './ChatForm.jsx';
import axios from 'axios';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      windowHeight: 0
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }
  componentDidMount() {
    this.connection = new WebSocket('ws://localhost:3000/messages/' + this.props.groupId);
    this.connection.onmessage = (event) => { 
      let message = JSON.parse(event.data)
      if (message.group_id === this.props.groupId) {
        this.setState({
          messages : this.state.messages.concat([message])
        })
      }
    };
  }
  componentWillReceiveProps() {
    this.getMessages()
  }
  sendMessage(contents) {
    if (this.props.userId && this.props.groupId) {
      let message = {
        contents: contents,
        user_id: this.props.userId,
        group_id: this.props.groupId
      }
      this.connection.send(JSON.stringify(message));
    }
  }
  getMessages() {
    if (this.props.groupId) {
      console.log('getting')
      axios.get('/messages/' + this.props.groupId)
        .then((response)=> {
          this.setState({
            messages: response.data
          })
        })
        .catch((error)=> {
          console.log(error);
        });
    }
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