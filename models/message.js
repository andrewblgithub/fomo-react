const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');

const Message = sequelize.define('message', {
  contents: Sequelize.STRING,
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  group_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Group,
      key: 'id'
    }
  }
});

Message.sync();

module.exports = Message;