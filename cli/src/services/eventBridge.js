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

// Created test event
// const scheduledDate = new Date();
// scheduledDate.setMinutes(scheduledDate.getMinutes() + 2); // Set the scheduled time to two minutes from now
// console.log('Scheduled date:', scheduledDate);
// createEvent(scheduledDate);

module.exports = createEvent;