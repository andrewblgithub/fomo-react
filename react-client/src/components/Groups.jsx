import React from 'react';
import GroupItem from './GroupItem.jsx';

const Groups = (props) => (
  <div>
    <h4> Group Component </h4>
    There are { props.groups.length } groups.
    { props.groups.map(group => <GroupItem group={group}/>)}
  </div>
)

export default Groups;