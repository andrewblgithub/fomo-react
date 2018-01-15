import React from 'react';
import {FormGroup, FormControl, Modal, Button} from 'react-bootstrap';
import DateTime from 'react-datetime';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      description: '',
      dateTime: ''
    }
    this.showModal = this.showModal.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleDateTime = this.handleDateTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  showModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  handleTitle(e) {
    this.setState({ title: e.target.value });
  }
  handleDescription(e) {
    this.setState({ description: e.target.value });
  }
  handleDateTime(e) {
    this.setState({ dateTime: e._d });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent({
      title: this.state.title,
      description: this.state.description,
      start_time: this.state.dateTime
    });
    this.showModal();
  }
  render() {
    return (
      <div>
        <Button
          onClick={()=> {this.showModal()}}
        >
          Create Event
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
                  value={this.state.title}
                  placeholder="Title"
                  onChange={(e)=>{this.handleTitle(e)}}
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
              <DateTime
                onChange={(e)=>{this.handleDateTime(e)}}
                value={this.state.dateTime}
                inputProps={{
                  placeholder: 'Datetime',
                }}
              />
              <br/>
              <Button type="button" onClick={(e)=>{this.handleSubmit(e)}}>Submit</Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default EventForm;