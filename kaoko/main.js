require('dotenv').config()
var Discord = require('discord.js')
var client = new Discord.Client()
var listenerModules = require('./listenerModules')
var initializerModules = require('./initializerModules')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  initializerModules.initializeAll(client)
})

client.on('message', msg => {
  listenerModules.allListenersReceive(msg)
})

client.login(process.env.DISCORD_BOT_TOKEN)
