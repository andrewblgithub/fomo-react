import React from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      email: '',
      password: '',
      // first_name: '',
      // last_name: ''
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    // this.handleFirst = this.handleFirst.bind(this);
    // this.handleLast = this.handleLast.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  // handleFirst(e) {
  //   this.setState({ first_name: e.target.value });
  // }
  // handleLast(e) {
  //   this.setState({ last_name: e.target.value });
  // }
  handleSubmit(e) {
    e.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password,
      // start_time: this.state.first_name,
      // last_name: this.state.last_name
    });
  }
  render() {
    return (
      <div>
        <h4>
          Login
        </h4>
        <form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={(e)=>{this.handleEmail(e)}}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.password}
              placeholder="Password"
              onChange={(e)=>{this.handlePassword(e)}}
            />
          </FormGroup>
          {/* <FormGroup>
            <FormControl
              type="text"
              value={this.state.first_name}
              placeholder="Firstname"
              onChange={(e)=>{this.handleFirst(e)}}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.last_name}
              placeholder="Lastname"
              onChange={(e)=>{this.handleLast(e)}}
            />
          </FormGroup> */}
          <Button type="button" onClick={(e)=>{this.handleSubmit(e)}}>Submit</Button>
        </form>
      </div>
    )
  }
}

export default LoginForm;