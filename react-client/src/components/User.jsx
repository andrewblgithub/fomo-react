import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

const User = (props) => (
  <ListGroupItem>
    { props.user.id }
    <br/>
    { props.user.email }
  </ListGroupItem>
)

export default User;