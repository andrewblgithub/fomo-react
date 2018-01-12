const users = require('../../controllers/users.js')
const express = require('express');
const router = express.Router();

router.post('/', (req, res)=> {
  res.json('authenticating user');
});

module.exports = router;