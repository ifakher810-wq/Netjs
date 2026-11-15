
const mineflayer = require('mineflayer');

const PASSWORD = '125PRO12567890';

const bot = mineflayer.createBot({
  host: 'FAKELAPATA1.aternos.me',
  port: 26176,
  username: 'LapataAFK',
  version: '1.21'
});

let loggedIn = false;

bot.once('spawn', () => {
  console.log('Bot joined!');

  setTimeout(() => {
    bot.chat(`/register ${PASSWORD} ${PASSWORD}`);
  }, 5000);

  setTimeout(() => {
    if (!loggedIn) {
      bot.chat(`/login ${PASSWORD}`);
    }
  }, 12000);
});

bot.on('messagestr', (message) => {
  if (
    message.toLowerCase().includes('successfully') ||
    message.toLowerCase().includes('logged in') ||
    message.toLowerCase().includes('registered')
  ) {
    loggedIn = true;
  }
});

bot.on('spawn', () => {
  if (loggedIn) {
    setInterval(() => {
      bot.setControlState('forward', true);

      setTimeout(() => {
        bot.setControlState('forward', false);
        bot.setControlState('jump', true);

        setTimeout(() => {
          bot.setControlState('jump', false);
        }, 500);
      }, 2000);
    }, 10000);

    setInterval(() => {
      bot.chat('Hello! I am AFK Bot!');
    }, 180000);
  }
});

bot.on('error', console.log);
bot.on('end', () => console.log('Bot disconnected'));
