var smtpTransport = require('nodemailer-smtp-transport');

// you can use Gmail or any other nodemailer transport
var auth = {
  host: 'localhost',
  port: 25,
  ignoreTLS: true,
};
//
//
module.exports = {
  confirmEmailHost: 'https://api.monetaryunit.org',
  email: smtpTransport(auth),
};
