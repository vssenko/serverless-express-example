const router = require('express').Router();
const users = require('../../services/userService');

router.get('/', function(req, res) {
  //todo: add generic req.promise
  users.getAll().then(data => res.send(data)).catch(e => res.send(e));
});

module.exports = router;
