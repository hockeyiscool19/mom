# mom-texter

Notice: I would never use this program to fool people, but please see my ethics section at the bottom of this repository.

We have all experienced this problem: we go on a fun trip and are having the time of our lives, but we leave our mom's to worry about our whereabouts. Then, we have to PAINSTAKINGLY take time out of our day, only to tell our mom that we are indeed alright. This problem is especially pressing when you are in the wilderness without service or wifi, having no way to contact your mom. How is she going to know that you have both limbs and have not been attacked by a bear? Impossible!!! I have even discussed this project with some of my friends, and they have the same complaint: their moms expect a dull text requiring a boring update. 
(To be fair, your dad may worry about your whereabouts, but this is my project and my dad couldn't care less about where I hike and for how long.)

Luckily, with the revolutionary power of artificial intelligence, and thanks to this repository, we will not have to waste our time like this ever again. 

This repository implements a command line script which takes in the dates of a wilderness trip and then uses OpenAI's GPT-3 and Twilio's texting service to message your mom messages about your trip into the wilderness. 

![image](https://github.com/hockeyiscool19/mom-texter/assets/65208198/65318104-6d91-4cb0-af24-1e1f7f0149f0)

Project Goal And Requirements: The goal of this project was to make a CLI script that allows you to schedule auto-generated texts to your mom. Thus, this project required completing a variety of tasks. One has to be able to:

1) Implement a CLI script inquiring about the dates of a trip
2) Schedule an event to trigger a script
3) Autogenerate texts to one's mother
4) Send texts to one's mother
5) Be affordable to build

Moreover, completing this process required use of cloud technologies, since I didn't have access to an at-home server. 

Implementing Step By Step:
1) To implement my CLI script, I used node.js along with the readline package to ask questions and store dates. On the backend, the prompt function inside of cli/src/services/prompt.js would take in dates and format them to be used by the scheduler. Additionally, I also containerized this script with Docker to allow me to more easily push code changes from my local machine onto the cloud. This Docker container would be pushed to AWS ECS. 
2) Being that I chose AWS, I used Amazon Eventbridge's Fargate to schedule running AWS ECS. Fargate allows you to schedule running containers. (I could have used Kubernetes to run containers but that would be serious overkill for my purposes.) 
3) Autogenerating texts, I used OpenAI's GPT-3 model, and I called this API using node.js with randomized prompts.
4) I used Twilio's cloud to send texts, once again implemented by node.js code.
5) The services I used costed under 20$ for the development stage, as I needed to test code at each step. 

Design Decisions: 
The Process: This project includes a variety of different technologies, all of which help get that lovely message across. First, I built a JavaScript project utilizing node and express. The Javascript program simply runs on a CLI, prompting the user for the dates of your trip. Using cloudwatch, Node connects with CloudWatch to schedule an event, including all the different days of your trip.


Wilderness calling out,
Mom, come explore with me.
Peaceful, quiet beauty.
