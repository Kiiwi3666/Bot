const aoijs = require("aoi.js") 

const bot = new  aoijs.Bot({
token: process.env.token,
prefix: "."
})
bot.onMessage()
bot.loadCommands(`./bot/comandos`)



bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
})