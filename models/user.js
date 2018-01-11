const Sequelize = require('../db/config.js');

const User = Sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  recent_activity: Sequelize.DATE,
  created_at: Sequelize.DATE
});

module.exports = User;