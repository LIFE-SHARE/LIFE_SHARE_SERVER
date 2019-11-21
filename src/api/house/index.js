const house = require('express').Router();
const houseCtrl = require('./house.ctrl');
const middleWareAuth = require('../../middleWare/auth');

house.get('/', houseCtrl.getHouseData);
house.get('/', middleWareAuth, houseCtrl.getUserHouse);
house.post('/', houseCtrl.register);

module.exports = house;
