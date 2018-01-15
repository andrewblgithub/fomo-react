import React from 'react';
import {ListGroup} from 'react-bootstrap'
import Group from './Group.jsx';
import GroupForm from './GroupForm.jsx';
// import GroupInfo from './GroupInfo.jsx';
// import GroupSearch from './GroupSearch.jsx';

const Groups = (props) => (
  <div>
    <GroupForm createGroup={props.createGroup} />
    <br/>
    <ListGroup>
      { props.groups.map((group, i) => 
        <Group
          group={group}
          key={i}
          selectGroup={props.selectGroup}
        />
      )}
    </ListGroup>
  </div>
)

export default Groups;