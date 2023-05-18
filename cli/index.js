
const prompt = require('./src/services/prompt');
const generateText = require('./src/services/gpt3');

async function main() {
    const { name, tripDates } = await prompt();
    tripDates.forEach((date) => {
        console.log(typeof date);
        console.log(date);
    }
    );
    const generatedText = await generateText();
    console.log(generatedText);
}

main();