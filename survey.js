const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer1) => {
  rl.question('What\'s an activity you like doing?', (answer2) => {
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
          rl.question('Which sport is your absolute favourite?', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              console.log(`Hello, ${answer1}! You like to ${answer2} and listen to ${answer3} it seems. I'm not into that. My favorite meal is breakfast while yours is ${answer4}. You love to eat ${answer5}.I don't like sports but you do. You love to watch ${answer6}.You can ${answer7} - AWESOME!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


