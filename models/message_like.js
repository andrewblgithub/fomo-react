const Sequelize = require('../db/config.js');

const MessageLike = Sequelize.define('messageLike', {
  created_at: Sequelize.DATE,
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

module.exports = MessageLike;