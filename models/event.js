const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');

const Event = sequelize.define('event', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  img_url: Sequelize.STRING,
  start_time: Sequelize.DATE,
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