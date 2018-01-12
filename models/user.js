const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');

const User = sequelize.define('user', {
  email: {type: Sequelize.STRING, allowNull: false},
  password: {type: Sequelize.STRING, allowNull: false},
  first_name: {type: Sequelize.STRING, allowNull: false},
  last_name: {type: Sequelize.STRING, allowNull: false},
  nickname: Sequelize.STRING,
  avatar_url: Sequelize.STRING,
  recent_activity: Sequelize.DATE
});

User.sync();

module.exports = User;