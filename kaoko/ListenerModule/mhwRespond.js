var Fuse = require('fuse.js')
var mhwData = require('../../kaokoConfigs/mhwdata.json')
var Discord = require('discord.js')

var options = {
  shouldSort: true,
  threshold: 0.5,
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
  this.channelSendEmbed = channelSendEmbed
  this.replyChannel = replyChannel
}

function respondData (message) {
  if (isCommandKeyword(message) && message.author.id !== message.client.user.id) {
    var monsterName = message.content.slice(5)
    var results = this.fuse.search(monsterName)
    if (results.length > 0) {
      var item = new Discord.MessageEmbed(results[0].item)
      this.channelSendEmbed(message, item)
    } else {
      this.replyChannel(message, `${monsterName}, There isn't such a monster bruh...<:denzel:628097559801495573>`)
    }
  }
}

function isCommandKeyword (message) {
  return message.content.match(/-mon .+/) || message.content.match(/\.m .+/)
}

module.exports = MHWRespond
