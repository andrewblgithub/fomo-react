import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

const Group = (props) => (
  <ListGroupItem
    onClick={()=> {
      props.selectGroup(props.group)
    }}
    style={{pointer: 'cursor'}}
  >
    { props.group.name }
  </ListGroupItem>
)

export default Group;