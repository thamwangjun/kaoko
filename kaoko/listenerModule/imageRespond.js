var utility = require('../utilityModule')
var createGifEmbed = require('../embeds/gifEmbed').createGifEmbed
var imageRespondConfig = require('../../imageRespondConfig.json')
var state = require('../state')

function listenRespondImage (message, map) {
  if (message.content in imageRespondConfig) {
    let url = imageRespondConfig[message.content]
    let embed = createGifEmbed(url, message)
    utility.channelSendEmbed(message, embed)
    message.delete()
  }

  if (!state.get('animatedEmojiMap')) {
    return
  }

  var animatedEmojiMap = state.get('animatedEmojiMap')

  if (message.content in animatedEmojiMap) {
    let url = animatedEmojiMap[message.content]
    let embed = createGifEmbed(url, message)
    utility.channelSendEmbed(message, embed)
    message.delete()
  }
}

module.exports = {
  receive: listenRespondImage
}
