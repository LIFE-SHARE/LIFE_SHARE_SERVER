const apply = require('express').Router();
const applyCtrl = require('./apply.ctrl');

const middleWare = require('../../../middleWare/auth')

apply.post('/', middleWare, applyCtrl.postApply);
apply.post('/delete', middleWare, applyCtrl.deleteApply);
apply.post('/getApply', middleWare, applyCtrl.getApply);


module.exports = apply;

