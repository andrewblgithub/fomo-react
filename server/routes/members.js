const members = require('../../controllers/members.js')
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

// add or remove memberships to a group

router.post('/', (req, res)=> {
  members.addMember(req.body, (result)=> {
    res.json(result);
  });
});

router.delete('/', (req, res)=> {
  members.deleteMember(req.body, (result)=> {
    res.json('Membership ' + result.id + ' terminated!');
  });
});

module.exports = router;