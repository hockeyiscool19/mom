# A Guide To The CLI

Inside, of src/services, we have a module to connect to Fargate. The eventBridge.js file callse fargate.js to schedule the ECS docker image to run. The file, prompt.js takes in input dates. 

Put together, index.js utilizes src/services/prompt.js to provide the dates for when you want texts to send and uses eventBridge.js to schedule the ECS container to run.

The dockerfile provides the runtime environment and the docker.sh is capable of pushing and this image to ECS in AWS and running the docker image to AWS ECS.

