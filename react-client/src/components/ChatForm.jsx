import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <FormGroup>
          <FormControl type="text" placeholder="Send a message" />
        </FormGroup>
      </form>
    )
  }
}

export default ChatForm;