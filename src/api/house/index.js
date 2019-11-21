const house = require('express').Router();
const houseCtrl = require('./house.ctrl');
const room = require('./room');

const middleWare = require('../../middleWare/auth')

house.post('/', middleWare, houseCtrl.register);
house.get('/', houseCtrl.getHouseData);
house.get('/my',middleWare, houseCtrl.getUserHouse);

house.use('/room', room);

module.exports = house;