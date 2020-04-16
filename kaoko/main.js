require('dotenv').config()
var Discord = require('discord.js')

var client = new Discord.Client()
var initializerModule = require('./InitializerModule')
var cache = require('./cache')

var UtilityModule = require('./utilityModule')
var GifEmbed = require('./embeds/GifEmbed')
var EmoteInfoEmbed = require('./embeds/EmoteInfoEmbed')

var ListenerModule = require('./ListenerModule')
var listenerModule = new ListenerModule(cache)

var ModuleLoader = require('./moduleLoader')

ModuleLoader.loadModules(listenerModule, initializerModule, GifEmbed, UtilityModule, cache, EmoteInfoEmbed)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  initializerModule.initializeAll(client, cache)
})

client.on('message', msg => {
  listenerModule.receiveAll(msg)
})

client.login(process.env.DISCORD_BOT_TOKEN)
