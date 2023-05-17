
const prompt = require('./services/prompt');
// const sendSms = require('./services/text');
const generateText = require('./services/gpt3');
const sendSms = require('./services/text');

async function main() {

    // const { name, tripDates } = await prompt();
    // tripDates.forEach((date) => {
    //     console.log(typeof date);
    //     console.log(date);
    // }
    // );
    const generatedText = await generateText();
    // const generatedText = "I recently went backpacking and happened upon an amazing waterfall! It was so much bigger than I expected, gushing down the rock face with enough force to fill the air with mist. The emerald green water was so clear that I could see the rocks at the bottom. It was really calming to just sit there and take it all in. I'll never forget that sight!";
    sendSms(generatedText);
}

main();