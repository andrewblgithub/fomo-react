var express = require('express')
var router = express.Router()

router.get('/', (req, res)=> {
  res.json('user route');
});

router.post('/', (req, res)=> {
  res.json('user route');
});

module.exports = router;