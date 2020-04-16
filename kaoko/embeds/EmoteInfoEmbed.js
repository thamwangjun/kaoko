var Discord = require('discord.js')

function create (emoteName, emoteUrl, messageObj) {
  var authorName = messageObj.member.nickname

  return new Discord.MessageEmbed({
    color: messageObj.member.displayColor,
    image: {
      url: emoteUrl
    },
    author: {
      name: authorName,
      iconURL: messageObj.author.avatarURL()
    },
    fields: [
      {
        name: 'Emote Name',
        value: emoteName
      },
      {
        name: 'Emote URL',
        value: emoteUrl
      }
    ]
  })
}

exports.create = create
