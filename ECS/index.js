const generatedText = require('./services/gpt3.js');
const sendSms = require('./services/twilio.js');

async function main() {
  try {
    const text = await generatedText();
    console.log(text);
    sendSms(text);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
