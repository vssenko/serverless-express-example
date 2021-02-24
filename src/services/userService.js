const {User} = require('../models');

function getAll(){
  return User.findAll({});
}

module.exports = {
  getAll
};