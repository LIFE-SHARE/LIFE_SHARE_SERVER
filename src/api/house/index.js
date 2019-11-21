const house = require('express').Router();
const houseCtrl = require('./house.ctrl');
const middleWareAuth = require('../../middleWare/auth');
const uplode = require('../../lib/upload')
const room = require('./room');

house.get('/', houseCtrl.getHouseData);
house.get('/', middleWareAuth, houseCtrl.getUserHouse);
house.post('/',middleWareAuth, uplode.array('image'), houseCtrl.register);

house.use('/room',middleWareAuth, room);

module.exports = house;
