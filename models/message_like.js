const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');

const MessageLike = sequelize.define('messageLike', {
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  message_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Message,
      key: 'id'
    }
  }
});

MessageLike.sync();

module.exports = MessageLike;