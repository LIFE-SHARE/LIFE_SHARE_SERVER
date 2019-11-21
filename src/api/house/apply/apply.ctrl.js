const models = require('../../models');

exports.postApply = async (req, res) =>{
    const { user_name, user_age, gender } = req.body;

    try{
        models.Apply.created({user_name: user_name,  user_age:  user_age, gender})
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

exports.deleteApply = async (req, res) => {
    const { id } = req.query;

    try{
        models.Apply.destroy({where: {id: id}})
        .then(data=>{
            const result = {
                status: 200,
                message: "삭제 성공",
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