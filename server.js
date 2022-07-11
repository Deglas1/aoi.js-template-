const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
   token: "токен бота",
   prefix: "$getservervar[prefix]",
    intents: "all"
})
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,'./commands/') //загрузчик команд
bot.onMessage(); //чтобы бот реагировал на команды 
bot.onInteractionCreate(); //для создания слешей и т.д
bot.variables({
prefix: "!"
})
const voice = new aoijs.Voice(bot, {
cache: {
    cacheType: "Memory",
    enabled: true,
  },
}); 
