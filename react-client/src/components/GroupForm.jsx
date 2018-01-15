import React from 'react';
import {FormGroup, FormControl, Modal, Button} from 'react-bootstrap';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: '',
      description: ''
    }
    this.showModal = this.showModal.bind(this);
  }
  showModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleDescription(e) {
    this.setState({ description: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createGroup({
      name: this.state.name,
      description: this.state.description,
    });
    this.showModal();
  }
  render() {
    return (
      <div>
        <Button
          onClick={()=> {this.showModal()}}
        >
          Create Group
        </Button>
        <Modal show={this.state.showModal}>
          <Modal.Body>
            <form>
              <Button
                onClick={()=> {this.showModal()}}
              >
                Close
              </Button>
              <br/>
              <br/>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.name}
                  placeholder="Name"
                  onChange={(e)=>{this.handleName(e)}}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.description}
                  placeholder="Description"
                  onChange={(e)=>{this.handleDescription(e)}}
                />
              </FormGroup>
              <br/>
              <Button type="button" onClick={(e)=>{this.handleSubmit(e)}}>Submit</Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default GroupForm;