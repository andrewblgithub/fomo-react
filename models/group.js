const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');

const Group = sequelize.define('group', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  created_at: Sequelize.DATE,
  private: Sequelize.BOOLEAN,
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
});

module.exports = Group;