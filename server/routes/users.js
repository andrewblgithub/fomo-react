const users = require('../../controllers/users.js')
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res)=> {
  users.getAllUsers((users)=> {
    res.json(users);
  });
});

router.get('/:id', (req, res)=> {
  users.getUser(req.params.id, (user)=> {
    res.json(user);
  })
});

router.post('/', (req, res)=> {
  users.createUser(req.body, (result)=> {
    res.json(result);
  });
});

router.put('/', (req, res)=> {
  users.updateUser(req.body, (result)=> {
    res.json(result[0] + ' user updated');
  });
});

router.delete('/', (req, res)=> {
  users.deleteUser(req.body, (result)=> {
    res.json('user' + result.id + 'deleted!');
  });
});

module.exports = router;