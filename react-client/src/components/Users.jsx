import React from 'react';
import User from './User.jsx';
import UsersForm from './UsersForm.jsx'
import {ListGroup} from 'react-bootstrap';

const Users = (props) => (
  <div>
    <UsersForm
      findUsers={props.findUsers}
      otherUsers={props.otherUsers}
    />
    <ListGroup>
      { props.users.map((user, i) => <User user={user} key={i}/>)}
    </ListGroup>
  </div>
)

export default Users;