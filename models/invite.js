const Sequelize = require('../db/config.js');

const Invite = Sequelize.define('invite', {
  created_at: Sequelize.DATE,
  accepted: Sequelize.BOOLEAN,
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  invited_user_id: {
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

module.exports = Invite;