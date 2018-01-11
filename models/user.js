const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');

const User = sequelize.define('user', {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  username: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  avatar_url: Sequelize.STRING,
  recent_activity: Sequelize.DATE
});

User.sync();

module.exports = User;