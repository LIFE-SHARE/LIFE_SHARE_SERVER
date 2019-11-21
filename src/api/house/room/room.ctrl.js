const models = require('../../../models');

exports.enrollmentRoom = async (req, res) => {
  const { information, deposit, monthly, people_count, houseId } = req.body;

  try {
    const image = req.files[0].filename;

    await models.Room.createRoom(information, deposit, monthly, people_count, image, houseId);

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