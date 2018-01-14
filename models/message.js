const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');
const User = require('../models/user.js');
const Group = require('../models/group.js');

const Message = sequelize.define('message', {
  contents: {type: Sequelize.STRING, allowNull: false},
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