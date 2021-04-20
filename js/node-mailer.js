const nodemailer = require("nodemailer");
const SMTPConnection = require("nodemailer/lib/smtp-connection");

const email = {
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "secure": false,
    "auth": {
        "user": "0bd492b4984dfa", //generated ethereal user
        "pass": "88c53c34ce4602", //generated ethereal password
    }
};

const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, function(error, info){
        if(error) {
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

const content = {
    from:"hyunhw92@hanmail.net",
    to: "4b327dd92d-8406e0@inbox.mailtrap.io",
    subject: "email practice",
    //text: "email practice - nodemailer를 이용한 이메일 보내기 연습"
    html: "<h2>email practice - nodemailer를 이용한 이메일 보내기 연습</h2>"
};

send(content);