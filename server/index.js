const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/config.js');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

const users = require('./routes/users');
const messages = require('./routes/messages');
const members = require('./routes/members');
const likes = require('./routes/likes');
const invites = require('./routes/invites');
const groups = require('./routes/groups');
const events = require('./routes/events');
const attendees = require('./routes/attendees');

app.use('/users', users);
// app.use('/messages', messages);
// app.use('/members', members);
// app.use('/likes', likes);
// app.use('/invites', invites);
app.use('/groups', groups);
// app.use('/events', events);
// app.use('/attendees', attendees);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});