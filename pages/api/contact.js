export default function (req, res) {
  require("dotenv").config();
  console.log(req.body);
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.REACT_APP_GMAIL_USERNAME,
      pass: process.env.REACT_APP_GMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: process.env.REACT_APP_GMAIL_USERNAME,
    subject: req.body.subject,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
