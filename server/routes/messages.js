const messages = require('../../controllers/messages.js')
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

const openChannels = [];

router.ws('/:group_id', (ws, req)=> {
  openChannels.push(ws);
  ws.on('message', (msg)=> {
    messages.createMessage(JSON.parse(msg), (result)=> {
      res.json(result);
    });
    openChannels.forEach(channel=> {
      if (channel.readyState === 1) {
        channel.send(msg);
      }
    })
  });
});

router.get('/:group_id', (req, res)=> {
  messages.getMessages(req.params.group_id, (messages)=> {
    res.json(messages);
  })
});

// need to add group_id param for routes below

// router.post('/', (req, res)=> {
//   messages.createMessage(req.body, (result)=> {
//     res.json(result);
//   });
// });

// router.put('/', (req, res)=> {
//   messages.updateMessage(req.body, (result)=> {
//     res.json(result[0] + ' message updated');
//   });
// });

// router.delete('/', (req, res)=> {
//   messages.deleteMessage(req.body, (result)=> {
//     res.json('message' + result.id + 'deleted!');
//   });
// });

module.exports = router;