
var emojiRegex = /<a?:[\w\d]+:\d+>/
var emojiIdRegex = /(?<=<a?:[\w\d]+:)\d+(?=>)/
var emojiNameRegex = /(?<=<a?:)[\w\d]+(?=:\d+>)/
var animojiRegex = /<a:[\w\d]+:\d+>/
var snowflakeRegex = /(\d{17,21})/

var Discord = require('discord.js')
const unknownMessageErrorCode = 10008

const invalidIdErrorMessage = `It seems like your gimote messageId is incorrect.
To get the message ID, right click (or hold press) on the message,
and select "Copy ID".
`

const notFoundErrorMessage = `It seems like your gimote messageId is not found in this discord server.
Currently, I can only find emotes that are in messages in this discord server.
`

function EmoteInfo (channelSendEmbed, isMentioningBot, replyChannel, emoteInfoEmbed) {
  this.receive = returnEmoteInfo
  this.channelSendEmbed = channelSendEmbed
  this.isMentioningBot = isMentioningBot
  this.emoteInfoEmbed = emoteInfoEmbed
  this.replyChannel = replyChannel
}

function returnEmoteInfo (message) {
  if (this.isMentioningBot(message)) {
    if (isInvalidCommand(message)) {
      return
    }
    if (isEmojiMessage(message)) {
      returnEmoteInfoFromMsgContent(message, this.emoteInfoEmbed, this.channelSendEmbed)
    } else {
      returnEmoteFromMsgId(message, this.emoteInfoEmbed, this.channelSendEmbed, this.replyChannel)
    }
  }
}

function isInvalidCommand (message) {
  return !message.cleanContent.match(/\s*gimote.+/) || message.author.id === message.client.user.id
}

function isEmojiMessage (message) {
  return emojiRegex.test(message.cleanContent)
}

function returnEmoteFromMsgId (message, emoteInfoEmbed, channelSendEmbed, replyChannel) {
  var fetchPromises = []

  var queryIdMatch = message.cleanContent.match(snowflakeRegex)
  if (!queryIdMatch) {
    replyErrorMessage(message, replyChannel, invalidIdErrorMessage)
    return
  }

  var queryId = queryIdMatch[0]

  message.client.channels.cache
    .each(searchMessageInGuildChannel(queryId, fetchPromises, replyChannel, emoteInfoEmbed, channelSendEmbed, message))

  Promise.all(fetchPromises)
    .then(handleNoResults)

  function handleNoResults (resultArr) {
    var positiveResult = false
    resultArr.forEach((result) => {
      if (result === true) {
        positiveResult = true
      }
    })
    if (positiveResult === false) {
      replyErrorMessage(message, replyChannel, notFoundErrorMessage)
    }
  }
}

function searchMessageInGuildChannel (queryId, fetchPromises, replyChannel, emoteInfoEmbed, channelSendEmbed, message) {
  return function (guildChannel) {
    if (guildChannel.type !== 'text') {
      return
    }
    fetchPromises.push(guildChannel.messages.fetch(queryId)
      .then((queriedMessage) => {
        if (!queriedMessage) {
          replyErrorMessage(queriedMessage, replyChannel, invalidIdErrorMessage)
          return
        }
        returnEmoteInfoFromMsgContent(queriedMessage, emoteInfoEmbed, channelSendEmbed, message)
        return true
      }).catch(catchFetchError))
  }
}

function catchFetchError (error) {
  if (error.code !== unknownMessageErrorCode) {
    console.log(error)
  }
  return false
}

function replyErrorMessage (message, replyChannel, errorMessage) {
  var authorName = message.member.nickname
  replyChannel(message, null, new Discord.MessageEmbed(
    {
      color: message.member.displayColor,
      author: {
        name: authorName,
        iconURL: message.author.avatarURL()
      },
      description: errorMessage
    }
  ))
}

function returnEmoteInfoFromMsgContent (message, emoteInfoEmbed, channelSendEmbed, sendtoMessage = message) {
  var emojiId = message.cleanContent.match(emojiIdRegex)[0]
  var emojiName = message.cleanContent.match(emojiNameRegex)[0]
  var extension = animojiRegex.test(message.cleanContent) ? 'gif' : 'png'

  var emojiUrl = `https://cdn.discordapp.com/emojis/${emojiId}.${extension}`

  var embed = emoteInfoEmbed.create(emojiName, emojiUrl, message)

  channelSendEmbed(sendtoMessage, embed)
}

module.exports = EmoteInfo
