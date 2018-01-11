const Sequelize = require('sequelize');
const sequelize = require('../db/config.js');

const Group = sequelize.define('group', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  private: Sequelize.BOOLEAN,
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
});

Group.sync();

module.exports = Group;