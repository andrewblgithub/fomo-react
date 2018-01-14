import React from 'react';
import {ListGroup} from 'react-bootstrap'
import Event from './Event.jsx';
import EventForm from './EventForm.jsx';
// import GroupInfo from './GroupInfo.jsx';
// import GroupSearch from './GroupSearch.jsx';

const Events = (props) => (
  <div>
    <EventForm props={props.createEvent} />
    <ListGroup>
      { props.events.map((event, i) => 
        <Event
          event={event}
          key={i}
        />
      )}
    </ListGroup>
  </div>
)

export default Events;