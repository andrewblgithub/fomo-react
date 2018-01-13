import React from 'react';
import User from './User.jsx';
import {ListGroup} from 'react-bootstrap';

const Users = (props) => (
  <div>
    <h4> Users Component </h4>
    <p>Search for / add new user form goes here.</p>
    <ListGroup>
      { props.users.map((user, i) => <User user={user} key={i}/>)}
    </ListGroup>
  </div>
)

export default Users;