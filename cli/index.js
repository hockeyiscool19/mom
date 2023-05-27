
const prompt = require('./src/services/prompt');
const createEvent = require('./src/services/eventBridge');

require('dotenv').config({ path: './dev.env.gitignore' });
const SUBNET_ID = process.env.SUBNET_ID;
console.log('SUBNET_ID:', SUBNET_ID);

async function main() {
    const { name, tripDates } = await prompt();
    tripDates.forEach((date) => {
        console.log(typeof date);
        console.log(date);
    }
    );
    // for date in tripDates, create event for that date 
    for (const date of tripDates) {
        const scheduledDate = new Date(date);
        // Make the date be at 8:00PM
        scheduledDate.setHours(20);
        scheduledDate.setMinutes(scheduledDate.getMinutes()); // Set the scheduled time to two minutes from the current date
        console.log('Scheduled date:', scheduledDate);
        createEvent(scheduledDate);
    }
}


main();