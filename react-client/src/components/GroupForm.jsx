import React from 'react';
import {FormGroup, FormControl, Collapse} from 'react-bootstrap';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Collapse in={true}>    
        <form>
          <FormGroup>
            <FormControl type="text" placeholder="Large text" />
          </FormGroup>
        </form>
      </Collapse>
    )
  }
}

export default GroupForm;