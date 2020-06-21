const TelegramBot = require('node-telegram-bot-api');

const token = '720980253:AAHSaRNaeNdO2rOMcr-sYwfVaI92R5ln6Lo';

const bot = new TelegramBot(token, { polling: true });




bot.onText(/Hello/, msg => {
  bot.sendMessage(msg.chat.id, 'I\'m bot Wanderrers. How can i help you?');
})