import React from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ message: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.message !== '') {
      this.props.sendMessage(this.state.message)
    }
    this.setState({message: ''});
  }
  render() {
    return (
      <Form
        inline
        onSubmit={(e)=>{this.handleSubmit(e)}}
      >
        <FormGroup>
          <FormControl
            type="text"
            value={this.state.message}
            placeholder="Send a message"
            onChange={(e)=>{this.handleChange(e)}}
          />
        </FormGroup>
        <Button type="button" onClick={(e)=>{this.handleSubmit(e)}}>Send</Button>
      </Form>
    )
  }
}

export default ChatForm;