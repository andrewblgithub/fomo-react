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

// users/login route to attempt login
router.post('/login', (req, res)=> {
  // comparePassword recieves email, pass, callback
  users.comparePassword(req.body.email, req.body.password, (result)=> {
    res.json(result);
  })
})

// post with group_id to get group users
router.post('/:group_id', (req, res)=> {
  users.getGroupUsers(req.params.group_id, (result)=> {
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