const room = require('express').Router();
const roomCtrl = require('./room.ctrl');
const upload = require('../../../lib/upload');

room.post('/', upload.array('image'), roomCtrl.enrollmentRoom);

module.exports = room;