const { Telegraf } = require("telegraf");
web_link = "https://strong-gumption-80b302.netlify.app"
const TOKEN = "5768601262:AAEXXeo90vkSShsCcTjguh6kY6WSsVgATjc";
const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply("Добро пожаловать, данный бот покажет вам всю информацию обо мне", { reply_markup: { keyboard: [[{ text: "Приложение", web_app: { url: web_link } }]] } }));
bot.launch();
