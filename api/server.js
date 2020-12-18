const express = require('express');
const server = express();

const Doggos = require('./doggos/doggos-router');

server.use(express.json());
server.use('/api/doggos', Doggos);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up '});
});

module.exports = server;
