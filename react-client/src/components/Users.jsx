import React from 'react';
import User from './User.jsx';

const Users = (props) => (
  <div>
    <h4> Users Component </h4>
    <p>Search for / add new user form goes here.</p>
    { props.users.map((user, i) => <User user={user} key={i}/>)}
  </div>
)

export default Users;