const express = require('express');
// const bodyParser = require('body-parser');
const db = require('../db/config.js');

const app = express();

const expressWs = require('express-ws')(app);

app.use(express.static(__dirname + '/../react-client/dist'));

const users = require('./routes/users');
const messages = require('./routes/messages');
// const invites = require('./routes/invites');
const members = require('./routes/members');
const groups = require('./routes/groups');
const events = require('./routes/events');
// const auth = require('./routes/auth');

app.use('/users', users);
app.use('/messages', messages);
// app.use('/invites', invites);
app.use('/groups', groups);
app.use('/events', events);
app.use('/members', members);
// app.use('/authentication', auth);

let port = process.env.PORT || 3000;

app.listen(3000, function() {
  console.log('listening on port ' + port);
});