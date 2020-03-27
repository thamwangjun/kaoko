var Fuse = require('fuse.js')
var mhwData = require('../../kaokoConfigs/mhwdata.json')
var Discord = require('discord.js')

var options = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 20,
  minMatchCharLength: 1,
  keys: [
    'key'
  ]
}

function MHWRespond (channelSendEmbed, replyChannel) {
  this.receive = respondData
  this.fuse = new Fuse(mhwData, options)
  this.receive = respondData
  this.channelSendEmbed = channelSendEmbed
  this.replyChannel = replyChannel
}

function respondData (message) {
  if (message.content.match(/-mon .+/)) {
    var monsterName = message.content.slice(5)
    var results = this.fuse.search(monsterName)
    if (results.length > 0) {
      var item = new Discord.MessageEmbed(results[0].item)
      this.channelSendEmbed(message, item)
    } else {
      this.replyChannel(message, `${monsterName}, There isn't such a monster bruh...`)
    }
  }
}

module.exports = MHWRespond
