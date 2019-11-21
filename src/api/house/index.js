const house = require('express').Router();
const houseCtrl = require('./house.ctrl');
const room = require('./room');
const uplode = require('../../lib/upload')

const middleWare = require('../../middleWare/auth')

house.get('/', houseCtrl.getHouseData);
house.post('/register', uplode.array('image'), houseCtrl.register);

house.use('/room', room);

module.exports = house;