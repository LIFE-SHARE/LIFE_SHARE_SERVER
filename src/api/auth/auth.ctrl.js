const models = require('../../models');
const tokenLib = require('../../lib/token');

exports.login = async (req, res) => {
  const { id, pw } = req.body;

  if(!id) {
    const result = {
      status: 400,
      message: "id를 입력해주세요!",
    }

    res.status(400).json(result);

    return;
  }

  if(!pw) {
    const result = {
      status: 400,
      message: "pw를 입력해주세요!",
    }

    res.status(400).json(result);

    return;
  }

  try {
    const member = await models.Member.findMemberForLogin(id, pw);

    if(!member) {
      const result = {
        status: 403,
        message: "가입이 되지 않은 회원입니다!",
      }
    
      res.status(403).json(result);

      return;
    }

    const token = await tokenLib.issuedToken(member.id, member);

    const result = {
      status: 200,
      message: "로그인 성공!",
      data: {
        token,
        member
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

exports.registerMember = async (req, res) => {
  const { body } = req;

  try {
    await validate.validateRegisterUser(body);
  } catch(error) {
    console.log(error);
    
    const result = {
      status: 400,
      message: "회원가입 양식을 확인 해주세요!",
    }

    res.status(400).json(result);

    return;
  }

  try {
    const memberId = await models.Member.findMemberId(id);

    if(memberId) {
      const result = {
        status: 409,
        message: "이미 가입이 된 id입니다!",
      }
    
      res.status(409).json(result);

      return;
    }

    await models.Member.registerAccount(body);

    const result = {
      status: 200,
      message: "회원가입 성공!",
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