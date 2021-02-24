require('dotenv').config();
const db = {
  username: process.env.db_user || 'postgres',
  password: process.env.db_password || 'db_password',
  database: process.env.database || 'postgres',
  useSsl: process.env.db_use_ssl ? process.env.db_use_ssl === 'true' : true,
  dialect: process.env.db_dialect || 'postgres',
  host: process.env.db_url || 'localhost',
  port: process.env.db_port || '5432'
};

module.exports = {
  db
};