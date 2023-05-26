const AWS = require('aws-sdk');
const { EventBridgeClient, ListEventBusesCommand, PutEventsCommand } = require("@aws-sdk/client-eventbridge");



// Configure AWS SDK
AWS.config.update({ 
    accessKeyId: 'AKIAVJEAYNNXMOESJUWI',
    secretAccessKey: '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',
    region: 'us-east-1' 
});

const eventBridgeClient = new EventBridgeClient({ region: 'us-east-1' });

async function checkConnection() {
    try {
      const command = new ListEventBusesCommand({});
      await eventBridgeClient.send(command);
      console.log('Connection to EventBridge is successful.');
    } catch (error) {
      console.error('Failed to connect to EventBridge:', error);
    }
  }
  
// Create function which takes in a date and a string argument called "prompt" and creates an event for 8:00PM on that date with the prompt as the detail
async function createEvent(date, prompt) {
    try {
        const params = {
            Entries: [
                {
                    Detail: prompt,
                    DetailType: 'string',
                    EventBusName: 'wildernessMomTexter',
                    Resources: [],
                    Source: 'wildernessMomTexter',
                    Time: date
                }
            ]
        };
        const command = new PutEventsCommand(params);
        await eventBridgeClient.send(command);
        console.log('Event successfully created.');
    } catch (error) {
        console.error('Failed to create event:', error);
    }
}


// Call the function to check the connection
checkConnection();

// Create an example instance of a date where the date is tommorrow at 8:00PM and the prompt is "Hello World"
const date = new Date();
date.setDate(date.getDate() + 1);
date.setHours(20);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);
const prompt = "Hello World";
// Call the function to create an event with the date and prompt
createEvent(date, prompt);
