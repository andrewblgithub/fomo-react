import React from 'react';
import {Well} from 'react-bootstrap';
import ChatMessage from './ChatMessage.jsx';

const ChatWindow = (props) => (
  <div>
    <br/>
      <Well>
        { props.messages.map((message, i) => <ChatMessage message={message} key={i}/>)}
      </Well>
  </div>
)

export default ChatWindow;