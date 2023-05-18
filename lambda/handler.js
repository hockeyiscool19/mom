

const accountSid = 'AC7c41214118c2964215d236e1a1dcda47';
const authToken = '230a61510cd7217037768d39e75c5feb';

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

console.log('Loading function');
// const handler = async(event) => {
exports.handler = async(event) => {
    // TODO implement
    sendSms("Hello from Node");
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

