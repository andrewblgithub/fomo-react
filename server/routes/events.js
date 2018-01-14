const events = require('../../controllers/events.js')
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.get('/:group_id', (req, res)=> {
  events.getEvents(req.params.group_id, (events)=> {
    res.json(events);
  });
});

router.post('/', (req, res)=> {
  events.createEvent(req.body, (result)=> {
    res.json(result);
  })
});

router.put('/', (req, res)=> {
  events.updateEvent(req.body, (result)=> {
    res.json(result[0] + ' updated');
  });
});

router.delete('/', (req, res)=> {
  users.deleteEvent(req.body, (result)=> {
    res.json('event ' + result.id + ' deleted!');
  });
});

module.exports = router;