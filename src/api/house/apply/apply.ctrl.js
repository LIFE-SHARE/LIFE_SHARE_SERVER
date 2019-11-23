const models = require('../../../models');
const emailLib = require('../../../lib/email');

exports.postApply = async (req, res) => {
    const { houseId, message } = req.body;
    const { userData } = req.decoded;
    
    // console.log(userData);
    
    try{
        await models.Apply.create({userName: userData.name, houseId: houseId, userAge: userData.age, gender: userData.gender, message: message, email: userData.email, userId: userData.id})
        .then(data=>{
            const result = {
                status: 200,
                message: "등록 성공",
              }
              res.status(200).json(result);
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

exports.deleteApply = async (req, res) => {
    const { applyId } = req.query;

    try{
        models.Apply.destroy({where: {id: applyId}})
        .then(data=>{
            const result = {
                status: 200,
                message: "삭제 성공",
              }
              res.status(200).json(result);
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

exports.getApply = async (req, res) =>{
    const { houseId } = req.query;
    const { userData } = req.decoded;
    console.log(houseId)

    try {

      const house_data = await models.House.getHouse(houseId);
      console.log(house_data.dataValues.userId);
      
      if(userData.id !== house_data.dataValues.userId) {
        const result = {
          status: 403,
          message: "조회 권한 없음!",
        }
  
        res.status(403).json(result);
      }

      const applyList = await models.Apply.getApplyList(houseId);

      const result = {
        status: 200,
        message: "신청 리스트 조회 성공!",
        data: {
         applyList 
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

exports.acceptApplication = async (req, res) => {
  // const { userData } = req.decoded;
  const { applyId } = req.query;

  try {

    const apply_data = await models.Apply.getApply(applyId);
    const house_data = await models.House.getHouse(apply_data.dataValues.houseId);
    console.log(house_data.dataValues.name);
    

    await emailLib.sendEmail(apply_data.dataValues.email, house_data.dataValues.name);
    await models.Apply.destroy({where: {id: applyId}});

    const result = {
      status: 200,
      message: "수락 성공!",
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

exports.getWaitApply =  async (req, res) =>{
    const { userData } = req.decoded;

    try {
        const applyList = await models.Apply.getWaitApplyList(userData.id);
        var idList = new Array();
        var resultList = new Array();

        for(var i = 0; i < applyList.length; i++){
            const id = applyList[i].houseId;

            if (!(idList.includes(id))){
                idList.push(id)
                var applyData = await models.House.getHouse(id);
                resultList.push(applyData);
            }
        }

        const result = {
            status: 200,
            message: "신청 리스트 조회 성공!",
            data: {
              resultList
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
