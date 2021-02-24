require('dotenv').config();
const config = require('../config');
const Sequelize = require('sequelize');
const logger = require('../utils/logger');
const dbConfig = config.db;
const sequelize = new Sequelize({
  ...config.db
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, Sequelize);

logger.log(`Connecting to DB: Host="${dbConfig.host}",Username=${dbConfig.username},Password=${dbConfig.password.substr(0,2)}`);
db.sequelize
  .authenticate()
  .then(() => {
    logger.log('Connection has been established successfully.');
  })
  .catch(err => {
    logger.error('Unable to connect to the database:', err);
  });


module.exports = db;