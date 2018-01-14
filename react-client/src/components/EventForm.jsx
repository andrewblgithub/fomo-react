import React from 'react';
import {FormGroup, FormControl, Modal, Button} from 'react-bootstrap';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.showModal = this.showModal.bind(this);
  }
  showModal() {
    this.setState({
      showModal: !this.state.showModal
    })
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
              <FormGroup>
                <FormControl type="text" placeholder="Large text" />
              </FormGroup>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default EventForm;