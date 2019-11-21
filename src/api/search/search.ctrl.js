const models = require('../../models');

exports.search = async (req, res) => {
  const { keyword, deposit, monthly, gender_limit } = req.body;

  try {
    const house = await models.House.findHouseAddress(keyword);

    if(deposit && !monthly && !gender_limit) {

    }
    if(!deposit && monthly && !gender_limit) {
      
    }
    if(!deposit && monthly && gender_limit) {
      
    }
    if(deposit && monthly && !gender_limit) {
      
    }
    if(!deposit && monthly && gender_limit) {
      
    }
    if(deposit && !monthly && gender_limit) {
      
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