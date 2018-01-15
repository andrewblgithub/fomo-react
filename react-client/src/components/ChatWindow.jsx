import React from 'react';
import {Well} from 'react-bootstrap';
import ChatMessage from './ChatMessage.jsx';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    this.refs.chat.scrollTop = this.refs.chat.scrollHeight;
  }
  render() {
    return (
      <Well>

        <div style={{ minHeight: '400px', maxHeight: '400px', overflowY: 'scroll'}} ref='chat'>
          { this.props.messages.map((message, i) => <ChatMessage message={message} key={i}/>)}
        </div>
      </Well>
    )
  }
}

export default ChatWindow;