const Mailgun = require('mailgun-js');

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;

function sendEmail(request, response) {
  const mailgun = new Mailgun({ apiKey, domain });
  mailgun.messages().send({ ...request.body, to: 'kevhender@gmail.com' }, error => {
    if (error) {
      response.send(JSON.stringify({
        success: false,
        error,
      }));
    } else {
      response.send(JSON.stringify({ success: true }));
    }
  });
}

module.exports = {
  sendEmail,
};
