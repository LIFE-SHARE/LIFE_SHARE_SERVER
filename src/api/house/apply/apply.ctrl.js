const models = require('../../../models');

exports.postApply = async (req, res) =>{
    const { userData } = req.decoded;
    console.log(userData);

    try{
        models.Apply.create({userName: userData.name,  userAge:  userData.age, gender: userData.gender})
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
    
}
