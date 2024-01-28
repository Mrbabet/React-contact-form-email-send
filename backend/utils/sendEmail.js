const nodemailer = require("nodemailer");
require("dotenv").config;

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

const options = {
  from: email,
  to: email,
};

module.exports = {
  transporter: transporter,
  options: options,
};
