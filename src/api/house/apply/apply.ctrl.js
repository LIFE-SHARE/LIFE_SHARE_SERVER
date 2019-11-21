const models = require('../../../models');

exports.postApply = async (req, res) => {
    const { houseId, message } = req.body;
    const { userData } = req.decoded;

    try{
        models.Apply.create({userName: userData.name, houseId: houseId, userAge: userData.age, gender: userData.gender, message: message})
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
    const { id } = req.query;

    try{
        models.Apply.destroy({where: {id: id}})
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
    const { houseId } = req.body;

    try {
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
