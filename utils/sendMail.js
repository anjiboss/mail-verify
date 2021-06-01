const nodemailer = require("nodemailer");
// const sendMail = (recipient, content, cb) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });
//   console.log(recipient);
//   const mailOptions = [
//     {
//       to: "nhu.nhu.face@gmail.com",
//       from: "an.ji.do.ggy@gmai.com",
//       subject: "Email Verification Mail",
//       text: `Thanks for using our service\n\n\tYour Code is: ${content}`,
//     },
//   ];
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("email sent " + info.respone);
//       cb();
//     }
//   });
// };
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
      from: "MB-Card", // sender address
      to: receiver, // list of receivers
      subject: "EMAIL VERIFY CODE", // Subject line
      text: "", // plain text body
      html: `<h4>${content}</h4>`, // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  };
  main().catch(console.error);
  cb();
};

module.exports = sendMail;
