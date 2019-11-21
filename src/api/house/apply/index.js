const apply = require('express').Router();
const applyCtrl = require('./apply.ctrl');

const middleWare = require('../../middleWare/auth')

apply.post('/postApply', middleWare, applyCtrl.postApply);


module.exports = house;

