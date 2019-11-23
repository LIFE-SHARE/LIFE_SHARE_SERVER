const account = require('../../config/google.account.json');
const nodeMailer = require('nodemailer');

exports.sendEmail = async (email ,houseName) => {
  var transporter = await nodeMailer.createTransport({
    service:'gmail',
    port: 587,
    host: 'smtp.gmail.com',
    secure: false,
    requireTLS: true,
    auth: {
        user : account.email,
        pass : account.pw,
    }
  });
  
  var mailOption = {
    from : account.email,
    to : email,
    subject : "수락 확인 이메일",
    html: `<html>
            <head>
              <h1> 수락 확인 이메일</h1>
            </head>
            <body>
                <p>${houseName}의 방문 신청이 수락 되었습니다!</p>
            </body>
           </html>`,
  };

  transporter.sendMail(mailOption, function(err, info) {
    if ( err ) { console.log(err); throw err;} 
    else {
        console.log('Message sent : ', info);
    }
  });
}