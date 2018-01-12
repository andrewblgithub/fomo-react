import React from 'react';
import Group from './Group.jsx';
import GroupForm from './GroupForm.jsx';
// import GroupInfo from './GroupInfo.jsx';
// import GroupSearch from './GroupSearch.jsx';

const Groups = (props) => (
  <div>
    <h4> Group Component </h4>
    <GroupForm props={props.createGroup} />
    { props.groups.map((group, i) => <Group group={group} key={i}/>)}
  </div>
)

export default Groups;