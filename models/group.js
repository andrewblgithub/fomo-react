const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');
const User = require('../models/user.js');

const Group = sequelize.define('group', {
  name: {type: Sequelize.STRING, allowNull: false},
  description: Sequelize.STRING,
  private: {type: Sequelize.BOOLEAN, allowNull: false},
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    allowNull: false
  }
});

Group.sync();

module.exports = Group;