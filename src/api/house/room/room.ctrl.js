const models = require('../../../models');

exports.enrollmentRoom = async (req, res) => {
  const { deposit, monthly, people_count, houseId } = req.body;
  const { userData } = req.decoded;

  try {
    if(userData.auth === 1) {
      const result = {
        status: 403,
        message: "손님은 작성 권한 없어요!",
      }
      res.status(403).json(result);
  
      return;
    }

    const house_data = await models.House.getHouse(houseId);
    if(house_data.dataValues.userId !== userData.id) {
      const result = {
        status: 403,
        message: '작성 권한 없음!'
      }
  
      res.status(403).json(result);
    }

    const image = req.files[0].filename;

    await models.Room.createRoom( deposit, monthly, people_count, image, houseId);

    const result = {
      status: 200,
      message: '방 생성 성공!'
    }

    res.status(200).json(result);
  } catch(error) {
    console.log(error);
    
    const result = {
      status: 500,
      message: '서버 에러!'
    }

    res.status(500).json(result);
  }
}