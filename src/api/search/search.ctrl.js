const models = require('../../models');

exports.search = async (req, res) => {
  const { keyword } = req.body;
  console.log(keyword);

  try {
    const house = await models.House.findHouseAddress(keyword);
    house_data = house[0];
    

    if(house_data === null) {
      const result = {
        status: 409,
        message: '하우스 검색 실패!',
        data: {
          house_data,
        }
      }
  
      res.status(200).json(result);
      return;
    }

    const result = {
      status: 200,
      message: '하우스 검색 성공!',
      data: {
        house_data,
      }
    }
    res.status(200).json(result);
  } catch(error) {
    console.log(error);
    
    const result = {
      status: 500,
      message: '서버 에러!',
    }

    res.status(500).json(result);
  }
}