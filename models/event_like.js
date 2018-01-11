const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');

const EventLike = sequelize.define('eventLike', {
  created_at: Sequelize.DATE,
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  event_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Event,
      key: 'id'
    }
  }
});

module.exports = EventLike;