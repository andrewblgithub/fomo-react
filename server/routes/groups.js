const groups = require('../../controllers/groups.js')
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res)=> {
  groups.getPublicGroups((groups)=> {
    res.json(groups);
  });
});

router.get('/:user_id', (req, res)=> {
  groups.getUserGroups(req.params.user_id, (groups)=> {
    res.json(groups);
  });
});

router.post('/', (req, res)=> {
  groups.createGroup(req.body, (result)=> {
    res.json(result);
  })
});

router.put('/', (req, res)=> {
  groups.updateGroup(req.body, (result)=> {
    res.json(result[0] + ' updated');
  });
});

router.delete('/', (req, res)=> {
  // users.deleteUser(req.body, (result)=> {
  //   res.json('user' + result.id + 'deleted!');
  // });
  res.json('feature not ready');
});

module.exports = router;