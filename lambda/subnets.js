const AWS = require('aws-sdk');
const ec2 = new AWS.EC2({ region: 'us-east-1' }); // Replace 'your-aws-region' with your desired AWS region

async function getSubnetIds(vpcId) {
  try {
    const response = await ec2.describeSubnets({ Filters: [{ Name: 'vpc-id', Values: [vpcId] }] }).promise();

    if (response.Subnets && response.Subnets.length > 0) {
      const subnetIds = response.Subnets.map(subnet => subnet.SubnetId);
      console.log('Subnet IDs:', subnetIds);
    } else {
      console.log('No subnets found for the specified VPC');
    }
  } catch (err) {
    console.error('Error retrieving subnet IDs:', err);
  }
}

const vpcId = 'your-vpc-id'; // Replace with the ID of your VPC
getSubnetIds(vpcId);
