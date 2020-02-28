require('dotenv').config()
var Discord = require('discord.js')
var client = new Discord.Client()
var listenerModule = require('./listenerModule')
var initializerModule = require('./initializerModule')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  initializerModule.initializeAll(client)
})

client.on('message', msg => {
  listenerModule.allListenersReceive(msg)
})

client.login(process.env.DISCORD_BOT_TOKEN)
