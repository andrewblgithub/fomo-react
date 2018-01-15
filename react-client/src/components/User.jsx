import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

const User = (props) => (
  <ListGroupItem
    onClick={()=> {
      props.showModal();
      props.addUser(props.user)
    }}
    style={{pointer: 'cursor'}}
  >
    { props.user.first_name } { props.user.last_name }
    <br/>
    { props.user.email }
  </ListGroupItem>
)

export default User;