import React from 'react';
import {Well} from 'react-bootstrap';
import ChatMessage from './ChatMessage.jsx';

// const ChatWindow = (props) => (
//   <div>
//     <br/>
//       <Well style={{minHeight: '400px', maxHeight: '400px', overflowY: 'scroll'}}>
//         { props.messages.map((message, i) => <ChatMessage message={message} key={i}/>)}
//       </Well>
//   </div>
// )

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
      <div style={{ minHeight: '400px', maxHeight: '400px', overflowY: 'scroll'}} ref='chat'>
        { this.props.messages.map((message, i) => <ChatMessage message={message} key={i}/>)}
      </div>
    )
  }
}

export default ChatWindow;