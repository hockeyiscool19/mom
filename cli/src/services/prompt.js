const readline = require('readline');

const prompt = () => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let name;
    let tripDates = [];

    rl.question('What is your name? ', (inputName) => {
      name = inputName;
      askDate();
    });

    const askDate = () => {
      rl.question('Enter a trip date in the format [mm/dd/yy] (or type "done" to finish): ', (inputDate) => {
        if (inputDate.toLowerCase() === 'done') {
          rl.close();
          resolve({ name, tripDates });
        } else {
          const currentDate = new Date();
          const selectedDate = new Date(inputDate);

          if (selectedDate > currentDate) {
            if (!tripDates.some((date) => date.toDateString() === selectedDate.toDateString())) {
              tripDates.push(selectedDate);
            } else {
              console.log('Duplicate date. Please enter a unique date.');
            }
          } else {
            console.log('Invalid date. Please enter a future date.');
          }

          askDate();
        }
      });
    };
  });
};

module.exports = prompt;
