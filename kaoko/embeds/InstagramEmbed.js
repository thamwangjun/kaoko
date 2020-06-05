var Discord = require('discord.js')

function create (instagramUrl, mediaUrl, messageObj) {
  var authorName = messageObj.member.nickname

  return new Discord.MessageEmbed({
    color: messageObj.member.displayColor,
    image: {
      url: mediaUrl
    },
    author: {
      name: authorName,
      iconURL: messageObj.author.avatarURL()
    },
    fields: [
      {
        name: 'Instagram Link',
        value: instagramUrl
      }
    ]
  })
}

exports.create = create
