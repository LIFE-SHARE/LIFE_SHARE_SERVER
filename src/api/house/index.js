const house = require('express').Router();
const houseCtrl = require('./house.ctrl');
const middleWare = require('../../middleWare/auth')

house.post('/register', middleWare, houseCtrl.register);
//house.post('/loading', houseCtrl.loading);

module.exports = house;