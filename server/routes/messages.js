const messages = require('../../controllers/messages.js')
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

const openChannels = [];

router.ws('/', (ws, req)=> {
  openChannels.push(ws);
  ws.on('message', (msg)=> {
    openChannels.forEach(channel=> {
      channel.send(msg);
    })
  });
});

// router.get('/:id', (req, res)=> {
//   messages.getMessages(req.params.id, (user)=> {
//     res.json(user);
//   })
// });

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