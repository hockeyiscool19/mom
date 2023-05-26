const { Configuration, OpenAIApi } = require('openai');

const prompts = [
    "Make a text to my mom about my trip to the wilderness. Limit to 100 words.",
    "Make a text to my mom about my trip to the wilderness. Tell her how you saw a new animal in the woods and it was awesome. Limit to 100 words.",
    "Tell mom about an awesome waterfall you saw while through hiking. Limit to 100 words.",
    "Write a hiku about the wilderness. Address this to mom Limit to 100 words.",
]

const configuration = new Configuration({
    apiKey: "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",
});

async function generateText() {
    var text = "";
    try {
      const openai = new OpenAIApi(configuration);
      const generatedText  = await openai.createCompletion({
        model: 'text-davinci-003',
        // choose random prompt from prompts array
        prompt: prompts[Math.floor(Math.random() * prompts.length)],
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [' Human:', ' AI:'],
      });
      text = generatedText.data.choices[0].text
      return text;
    } catch (error) {
      console.error('Error:', error);
    }
  }

module.exports = generateText;