var config = require('../../kaokoConfigs/config.json')
var Discord = require('discord.js')

function createGifEmbed (url, messageObj) {
  return new Discord.RichEmbed({
    color: config.color,
    image: {
      url: url
    },
    author: {
      name: messageObj.author.username,
      icon_url: messageObj.author.avatarURL
    }
  })
}

exports.createGifEmbed = createGifEmbed
