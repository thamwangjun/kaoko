require('dotenv').config()
var Discord = require('discord.js')

var client = new Discord.Client()
var listenerModule = require('./listenerModule')
var initializerModule = require('./initializerModule')

var initializerDependencyFactory = require('./dependencyFactories/initializerFactory')
var initializerModuleDependencies = initializerDependencyFactory.createDependencies()

var listenerDependencyFactory = require('./dependencyFactories/listenerFactory')
var listenerModuleDependencies = listenerDependencyFactory.createDependencies()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  initializerModule.initializeAll(client, initializerModuleDependencies)
})

client.on('message', msg => {
  var state = initializerModuleDependencies.aniemojiInitializerDependencies.state
  listenerModule.allListenersReceive(msg, listenerModuleDependencies, state)
})

client.login(process.env.DISCORD_BOT_TOKEN)
