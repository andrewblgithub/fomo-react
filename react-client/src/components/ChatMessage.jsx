import React from 'react';
import {Panel} from 'react-bootstrap';

const ChatMessage = (props) => (
  <Panel>
    <Panel.Body>
      <b>{props.message.contents}</b>
      <span>: </span>
      {props.message.contents}
    </Panel.Body>
  </Panel>
)

export default ChatMessage;