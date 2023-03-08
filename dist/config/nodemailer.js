"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer = require("nodemailer");
exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "mi.turno.wepapp.mails.23@gmail.com",
        pass: "ftpauwmqiguqegjh", // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false,
    },
});
exports.transporter
    .verify()
    .then(() => {
    console.log("Ready for send emails!");
})
    .catch((err) => {
    console.log(err, "Not ready for send emails :(");
});
