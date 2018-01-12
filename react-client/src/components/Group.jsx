import React from 'react';

const Group = (props) => (
  <div>
    <hr/>
    <p>
      { props.group.name }
    </p>
    <p>
      { props.group.description }
    </p>
    <hr/>
  </div>
)

export default Group;