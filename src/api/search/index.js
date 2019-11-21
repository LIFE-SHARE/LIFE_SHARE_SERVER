const search = require('express').Router();
const searchCtrl = require('./search.ctrl');
const middleWareAuth = require('../../middleWare/auth');

search.post('/',middleWareAuth, searchCtrl.search);

module.exports = search;