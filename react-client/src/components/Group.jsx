import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

const Group = (props) => (
  <ListGroupItem>
    { props.group.name }
  </ListGroupItem>
)

export default Group;