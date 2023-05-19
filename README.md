# wilderness-mom-texter

Notice: I would never use this program to fool people, but please see my ethics section at the bottom of this repository.

We have all experienced this problem: we go on a fun trip and are having the time of our lives, but we leave our mom's to worry about our whereabouts. Then, we have to PAINSTAKINGLY take time out of our day, only to tell our mom that we are indeed alright. This problem is especially pressing when you are in the wilderness without service or wifi, having no way to contact your mom. How is she going to know that you have both limbs and have not been attacked by a bear? Impossible!!!

(To be fair, your dad may worry about your whereabouts, but this is my project and my dad couldn't care less about where I hike and for how long.)

Luckily, with the revolutionary power of artificial intelligence, and thanks to this repository, we will not have to waste our time like this ever again. 

This repository implements a command line script which takes in the dates of a wilderness trip and then uses OpenAI's GPT-3 and Twilio's texting service to message your mom messages about your trip into the wilderness. 

![image](https://github.com/hockeyiscool19/wilderness-mom-texter/assets/65208198/ac0e2c93-7ae2-45a3-a1c7-7ec6a67a8a82)

The Process: This project includes a variety of different technologies, all of which help get that lovely message across. First, I built a JavaScript project utilizing node and express. The Javascript program simply runs on a CLI, prompting the user for the dates of your trip. Using cloudwatch, Node connects with CloudWatch to schedule an event, including all the different days of your trip.
