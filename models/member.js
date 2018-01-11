const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');

const Member = sequelize.define('member', {
  created_at: Sequelize.DATE,
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

module.exports = Member;