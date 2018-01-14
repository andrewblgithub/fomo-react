const Event = require('../models/event.js');

const createEvent = (data, callback) => {
  Event.create(data).then((createdEvent, err)=> {
    callback(createdEvent);
  })
};

const updateEvent = (data, callback) => {
  Event.update(data, {
    where: {id: data.id}
  }).then((updatedEvent)=> {
    callback(updatedEvent);
  })
};

const deleteEvent = (data, callback) => {
  Event.destroy({
    where: {id: data.id}
  }).then((deletedUser)=> {
    callback(deletedUser)
  })
};

const getEvents = (input, callback) => {
  // find events in a specific group only by id
  // order by start time
  Event.findAll({
    where: {group_id: input},
    order: [
      ['start_time', 'ASC']
    ],
  }).then((events)=> {
    callback(events);
  })
}

module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents
}