
require('dotenv').config({ path: './dev.env.gitignore' });

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const twilio = require('twilio');
const client = twilio(accountSid, authToken);

function sendSms(body) {
    client.messages
    .create({
        body: body,
        from: '+18556421136',
        to: '+18027337703'
    })
    .then(message => console.log(message.sid))
}

module.exports = sendSms;