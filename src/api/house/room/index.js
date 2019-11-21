const room = require('express').Router();
const roomCtrl = require('./room.ctrl');

room.post('/');

module.exports = room;