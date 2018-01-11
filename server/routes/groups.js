var express = require('express')
var router = express.Router()

router.get('/', (req, res)=> {
  res.json('group route');
});

router.post('/', (req, res)=> {
  res.json('group route');
});

module.exports = router;