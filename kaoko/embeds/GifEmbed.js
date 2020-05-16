var Discord = require('discord.js')

function create (url, messageObj) {
  var authorName = messageObj.member.nickname || messageObj.author.username

  return new Discord.MessageEmbed({
    color: messageObj.member.displayColor,
    image: {
      url: url
    },
    author: {
      name: authorName,
      iconURL: messageObj.author.avatarURL()
    }
  })
}

exports.create = create
