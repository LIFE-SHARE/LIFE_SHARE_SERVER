const models = require('../../models');
const log = require('../../lib/log');

exports.enrollmentHouse = async (req, res) => {
  log.green("CALL enrollmentHouse API");
  const { name, address, genderLimit, ageLimit, maxMember, contractperiod, information } = req.body;
  const { userData } = req.decoded;

  if(!req.files[0]) {
    const result = {
      status: 400,
      message: "사진을 첨부해주세요!!",
    }
    res.status(400).json(result);

    return;
  }

  const image = req.files[0].filename;

  if(userData.auth !== 0) {
    const result = {
      status: 403,
      message: "손님은 작성 권한 없어요!",
    }
    res.status(403).json(result);

    return;
  }
 
  if(!address){
    const result = {
      status: 400,
      message: "주소를 입력해주세요!",
    }

    res.status(400).json(result);

    return;
  }

  if(!name){
    const result = {
      status: 400,
      message: "이름을 입력해주세요!",
    }

    res.status(400).json(result); 

    return;
  }

  try{
    models.House.create({name: name, userId:userData.id, address: address, genderLimit: genderLimit, ageLimit: ageLimit, maxMember:maxMember, contractperiod: contractperiod, information: information, imageData: image})
    .then(data=>{
      const result = {
        status: 200,
        message: "등록 성공",
      }
      res.status(200).json(result);
    });
    
  }catch(error) {
    console.log(error);

    const result = {
      status: 500,
      message: "서버 에러!",
    }

    res.status(500).json(result);
  }
}

exports.getHouseData = async (req, res) =>{
  log.green("CALL getHouseData API");
  const { houseId } = req.query;
  let house_data;
  let room_data;

  try {
    if(houseId) {
      house_data = await models.House.getHouse(houseId);
      room_data = await models.Room.getRoomList(houseId);
    }
    else {
      house_data = await models.House.getHouseAll();
    }

    const result = {
      status: 200,
      message: "하우스 데이터 불러오기 성공!",
      data: {
        house_data,
        room_data
      }
    }

    res.status(200).json(result);
  } catch(error) {
    console.log(error);

    const result = {
      status: 500,
      message: "서버 에러!",
    }

    res.status(500).json(result);
  }
}

exports.getUserHouse = async (req, res) => {
  log.green("CALL getUserHouse API");
  const { userData } = req.decoded;

  if(userData.auth === 1) {
    const result = {
      status: 403,
      message: "손님은 하우스 불러오기 권한 없어요!",
    }

    res.status(403).json(result);

    return;
  }
  
  try {
    const house_data = await models.House.getUserHouse(userData.id);

    const result = {
      status: 200,
      message: "내가 작성한 하우스 불러오기 성공!",
      data: {
        house_data,
      }
    }

    res.status(200).json(result);
  } catch(error) {
    console.log(error);

    const result = {
      status: 500,
      message: "서버 에러!",
    }

    res.status(500).json(result);
  }
}