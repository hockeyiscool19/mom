
# A guide to Elastic Container Service Folder

Inside, of services, we have a module that connects to GPT-3 and another that connects to Twilio to send texts. The active file in this folder is index.js, which runs a simple main function. The main function generates a text, calling services/gpt3.js and sends and SMS text with Twilio -- very simple!

The dockerfile provides the runtime environment and the docker.sh is capable of pushing and this image to ECS in AWS and running the docker image. 
