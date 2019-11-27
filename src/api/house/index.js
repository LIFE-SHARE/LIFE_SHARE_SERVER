const house = require('express').Router();
const houseCtrl = require('./house.ctrl');
const middleWareAuth = require('../../middleWare/auth');
const uplode = require('../../lib/upload')
const room = require('./room');
const apply = require('./apply');

house.get('/', houseCtrl.getHouseData);
house.get('/my', middleWareAuth, houseCtrl.getUserHouse);
house.post('/',middleWareAuth, uplode.array('image'), houseCtrl.enrollmentHouse);

house.use('/room',middleWareAuth, room);
house.use('/apply',middleWareAuth, apply);

module.exports = house;
