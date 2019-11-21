const api = require('express').Router();
const auth = require('./auth');
const house = require('./house');

api.use('/auth', auth);
api.use('/house', house);

module.exports = api;