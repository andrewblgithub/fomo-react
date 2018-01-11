const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');

const Attendee = sequelize.define('attendee', {
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

Attendee.sync();

module.exports = Attendee;