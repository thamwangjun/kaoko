var Fuse = require('fuse.js')
var mhwData = require('../../kaokoConfigs/mhwdata.json')
var Discord = require('discord.js')

var options = {
  shouldSort: true,
  threshold: 0.75,
  location: 0,
  distance: 20,
  minMatchCharLength: 1,
  keys: [
    'key'
  ]
}

function MHWRespond (channelSendEmbed) {
  this.receive = respondData
  this.fuse = new Fuse(mhwData, options)
  this.receive = respondData
  this.channelSendEmbed = channelSendEmbed
}

function respondData (message) {
  if (message.content.match(/-mon .+/)) {
    var monsterName = message.content.slice(5)
    var results = this.fuse.search(monsterName)
    var item = new Discord.MessageEmbed(results[0].item)
    this.channelSendEmbed(message, item)
  }
}

module.exports = MHWRespond
