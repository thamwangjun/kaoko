var Discord = require('discord.js')

function createGifEmbed (url, messageObj) {
  var authorName = messageObj.member ? messageObj.member.nickname : messageObj.author.username

  return new Discord.RichEmbed({
    color: messageObj.member.displayColor,
    image: {
      url: url
    },
    author: {
      name: authorName,
      icon_url: messageObj.author.avatarURL
    }
  })
}

exports.createGifEmbed = createGifEmbed
