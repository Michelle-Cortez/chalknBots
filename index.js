// Author: Michelle Cortez

const chalk = require('chalk');
// testing chalk
console.log(chalk.red('Hello world!'));

const Discord = require('discord.js');
const client = new Discord.Client();
// when ready return user tag which is Sleepy bear5975
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// require strings for replys to start with ?
const PREFIX = "?"

// reply pong when ping is sent to bot
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  } else {

    // this recieves the string removes the first character and splits the string into an array
    let args = msg.content.substring(PREFIX.length).split(" ");
    console.log(args)

    // I looked this up my understanding is that it allows a connect from here to discord to share the args array 
    switch (args[0]) {
      // the following are responses based on matches to strings sent to bot
      case 'website':
        msg.channel.send("http://www.youtube.com/user/kir10s");
        break;
      case 'hello':
        msg.channel.send("Hello Nurse!!!");
        break;
      case 'secretStory':
        console.log(chalk.red.bold.bgYellow("Learning is sweet"));
        console.log(chalk.blue.italic("As a first grade Reading Recovery teacher, I had to do assessments at the beginning of the school year to determine which students qualified for the "));
        console.log(chalk.green.italic("program. Part of the assessment was having them read a sheet with randomly ordered upper and lowercase letters. One of the students I was"));
        console.log(chalk.yellow.italic("testing came to a lowercase “m”. He looked and looked at it. Finally, he turned to me and said, “I have seen that letter on M&M’s, but I don’t know what it’s called."));
        console.log(chalk.white.inverse.bold("—Submitted by Heidi Bailey, Tremonton, Utah."));
        msg.channel.send("You just read a secret story... shh time for bed");
        break;

      case 'avatar':
        msg.reply(msg.author.displayAvatarURL());
        break;
      case 'clear':
        if (!args[1]) {
          return msg.reply("Error please define a second parameter")
        } else {
          msg.channel.bulkDelete(args[1]);
          break;
        }
    }
  }
});



// token for my robot, although posting this online compromises my robot. discord sent me a message about it. Is there a way to hide this?
client.login('ODM5OTEzMzIxMTM3ODMxOTU3.YJQkPA.6_oD02Meo4zDs5wqOW2zxdAi1qw');