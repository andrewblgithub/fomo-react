import React from 'react';
import {Well} from 'react-bootstrap';
import ChatMessage from './ChatMessage.jsx';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
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
  render() {
    return (
      <div>
        <br/>
          <Well>
            { this.state.messages.map((message, i) => <ChatMessage message={message} key={i}/>)}
          </Well>
      </div>
    )
  }
}

export default ChatWindow;