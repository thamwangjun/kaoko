require('dotenv').config()
var Discord = require('discord.js')

var client = new Discord.Client()
var initializerModule = require('./InitializerModule')
var cache = require('./cache')
var imageRespondConfig = require('../kaokoConfigs/imageRespondConfig.json')

var UtilityModule = require('./utilityModule')
var GifEmbed = require('./embeds/GifEmbed')

var ListenerModule = require('./ListenerModule')
var listenerModule = new ListenerModule(cache)
var ImageRespondModule = require('./ListenerModule/imageRespond')
var MhwRespond = require('./ListenerModule/mhwRespond')
listenerModule.loadListeners(new ImageRespondModule(GifEmbed.create, UtilityModule.channelSendEmbed, imageRespondConfig, cache))
listenerModule.loadListeners(new MhwRespond(UtilityModule.channelSendEmbed))

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  initializerModule.initializeAll(client, cache)
})

client.on('message', msg => {
  listenerModule.receiveAll(msg)
})

client.login(process.env.DISCORD_BOT_TOKEN)
