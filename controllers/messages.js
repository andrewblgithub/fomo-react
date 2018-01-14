const Message = require('../models/message.js');

const createMessage = (data, callback) => {
  Message.create(data).then((createdMessage, err)=> {
    callback(createdMessage);
  })
};

const updateMessage = (data, callback) => {
  Message.update(data, {
    where: {id: data.id}
  }).then((updatedMessage)=> {
    callback(updatedMessage);
  })
};

const deleteMessage = (data, callback) => {
  Message.destroy({
    where: {id: data.id}
  }).then((deletedMessage)=> {
    callback(deletedMessage)
  })
};

const getMessages = (input, callback) => {
  // find messages in a specific group only by id
  Message.findAll({
    where: {group_id: input}
  }).then((Messages)=> {
    callback(Messages);
  })
}

module.exports = {
  createMessage,
  updateMessage,
  deleteMessage,
  getMessages
}