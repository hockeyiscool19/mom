const AWS = require('aws-sdk');
const createFargateTask = require('./fargate');
const eventBridgeClient = new AWS.EventBridge({ region: 'us-east-1' });

async function createEvent(date) {
  try {
    const params = {
      Entries: [
        {
          Detail: "string",
          DetailType: 'string',
          EventBusName: 'wildernessMomTexter',
          Resources: [],
          Source: 'wildernessMomTexter',
          Time: date.toISOString(), 
        },
      ],
    };
    await eventBridgeClient.putEvents(params).promise();
    console.log('Event successfully created.');
    await createFargateTask();
  } catch (error) {
    console.error('Failed to create event:', error);
  }
}


module.exports = createEvent;