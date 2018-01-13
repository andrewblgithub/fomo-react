import React from 'react';
import {Panel} from 'react-bootstrap';

const ChatMessage = (props) => (
  <Panel>
    <Panel.Body>
      { props.message.message }
    </Panel.Body>
  </Panel>
)

export default ChatMessage;