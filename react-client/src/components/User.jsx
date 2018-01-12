import React from 'react';

const User = (props) => (
  <div>
    <hr/>
    <p>
      { props.user.id }
    </p>
    <p>
      { props.user.email }
    </p>
    <hr/>
  </div>
)

export default User;