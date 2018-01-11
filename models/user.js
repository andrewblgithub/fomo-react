const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  recent_activity: Sequelize.DATE,
  created_at: Sequelize.DATE
});

module.exports = User;