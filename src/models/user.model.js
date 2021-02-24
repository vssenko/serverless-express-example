const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  });

  return User;
};
