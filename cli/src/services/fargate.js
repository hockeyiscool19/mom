const AWS = require('aws-sdk');
const ecs = new AWS.ECS({ region: 'us-east-1' });

require('dotenv').config({ path: './dev.env.gitignore' });

const subnet = process.env.SUBNET_ID;


async function createFargateTask() {
  try {
    const cluster = 'mom-texter';
    const taskDefinition = 'mom-texter:5';
    const subnetIds = [subnet]; 
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

module.exports = createFargateTask;
