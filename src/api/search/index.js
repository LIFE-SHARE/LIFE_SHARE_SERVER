const search = require('express').Router();
const searchCtrl = require('./search.ctrl');

search.post('/', searchCtrl.search);

module.exports = search;