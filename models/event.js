const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');
const User = require('../models/user.js');
const Group = require('../models/group.js');

const Event = sequelize.define('event', {
  title: {type: Sequelize.STRING, allowNull: false},
  description: Sequelize.STRING,
  img_url: Sequelize.STRING,
  start_time: {type: Sequelize.DATE, allowNull: false},
  end_time: Sequelize.DATE,
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

Event.sync();

module.exports = Event;