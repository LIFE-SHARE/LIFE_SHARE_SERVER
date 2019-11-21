const models = require('../../models');

exports.register = async (req, res) => {
  const { name, address, genderLimit, ageLimit, contractperiod,information, maxDeposit, maxMonthly, imageData } = req.body;

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
    models.House.created({name: name, address: address, genderLimit: genderLimit, ageLimit: ageLimit, contractperiod: contractperiod, information: information, maxDeposit: maxDeposit, maxMonthly: maxMonthly, imageData: imageData})
    .then(data=>{
        const result = {
            status: 200,
            message: "등록 성공",
          }
        console.log(data)
    })
    
  }catch(error) {
        console.log(error);

        const result = {
        status: 500,
        message: "서버 에러!",
        }

        res.status(500).json(result);
    }
}
