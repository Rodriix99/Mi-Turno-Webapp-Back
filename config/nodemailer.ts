const nodemailer = require("nodemailer");
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "mi.turno.wepapp.mails.23@gmail.com", // generated ethereal user
    pass: "ftpauwmqiguqegjh", // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Ready for send emails!");
  })
  .catch((err: any) => {
    console.log(err, "Not ready for send emails :(");
  });
