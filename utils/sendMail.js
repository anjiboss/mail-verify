const nodemailer = require("nodemailer");

const sendMail = (receiver, content, cb) => {
  const main = async () => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "MB-Card<an.ji.do.ggy@gmail.com>", // sender address
      to: receiver, // list of receivers
      subject: "EMAIL VERIFY CODE", // Subject line
      text: "", // plain text body
      html: `<h4>${content}</h4>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    cb();
  };
  main().catch(console.error);
};

module.exports = sendMail;
