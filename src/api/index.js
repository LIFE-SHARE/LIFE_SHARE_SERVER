const api = require('express').Router();
const auth = require('./auth');
const house = require('./house');
const search = require('./search');
//const apply = require('./house/apply');

api.use('/auth', auth);
api.use('/house', house);
api.use('/search', search);

module.exports = api;