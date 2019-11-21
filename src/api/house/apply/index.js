const apply = require('express').Router();
const applyCtrl = require('./apply.ctrl');

const middleWare = require('../../../middleWare/auth')

apply.post('/', middleWare, applyCtrl.postApply);
apply.delete('/', middleWare, applyCtrl.deleteApply);
apply.get('/', middleWare, applyCtrl.getApply);
apply.get('/getWaitApply', middleWare, applyCtrl.getWaitApply);
apply.get('/accept', applyCtrl.acceptApplication);


module.exports = apply;

