exports.enrollmentRoom = (req, res) => {
  // const {  }

  try {

  } catch(error) {
    console.log(error);
    
    const result = {
      status: 500,
      message: '서버 에러!'
    }

    res.status(500).json(result);
  }
}