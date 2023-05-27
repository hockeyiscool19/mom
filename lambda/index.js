
const AWS = require('aws-sdk');
const ecs = new AWS.ECS({ region: 'us-east-1' });

async function createFargateTask() {
  try {
    const cluster = 'mom-texter';
    const taskDefinition = 'mom-texter:5';
    const subnetIds = ['subnet-0ea6d9c310b5d3211']; 

    const response = await ecs.runTask({
      cluster: cluster,
      taskDefinition: taskDefinition,
      launchType: 'FARGATE',
      networkConfiguration: {
        awsvpcConfiguration: {
          subnets: subnetIds,
          assignPublicIp: 'ENABLED'
        }
      }
    }).promise();

    if (response.failures && response.failures.length > 0) {
      const failureReason = response.failures[0].reason;
      console.error(`Failed to create Fargate task. Reason: ${failureReason}`);
    } else {
      console.log('Fargate task created successfully');
      console.log('Task ARN:', response.tasks[0].taskArn);
    }
  } catch (err) {
    console.error(`Error creating Fargate task: ${err.message}`);
  }
}

const eventBridgeClient = new AWS.EventBridge({ region: 'us-east-1' });

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

const scheduledDate = new Date();
scheduledDate.setMinutes(scheduledDate.getMinutes() + 2); // Set the scheduled time to two minutes from now
console.log('Scheduled date:', scheduledDate);
createEvent(scheduledDate, 'Your prompt message');
