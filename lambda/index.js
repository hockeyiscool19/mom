
// const generatedText = require('./services/gpt3.js');
// const sendSms = require('./services/twilio.js');

// async function main() {
//     const text = await generatedText();
//     console.log(text);
//     sendSms(text);
//     console.log("hello world");
// }

// main();
const generatedText = require('./services/gpt3.js');
const sendSms = require('./services/twilio.js');

exports.handler = async (event, context) => {
    try {
        const text = await generatedText();
        console.log(text);
        await sendSms(text);
        console.log("hello world");
    } catch (error) {
        console.error(`Error executing lambda function: ${error}`);
        throw error;  // rethrow the error to AWS Lambda
    }
};
