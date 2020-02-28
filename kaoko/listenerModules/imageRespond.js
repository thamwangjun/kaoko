var utility = require('../utilityModule')
var createGifEmbed = require('../embeds/gifEmbed').createGifEmbed
var imageRespondConfig = require('../../kaokoConfigs/imageRespondConfig.json')
var state = require('../state')
var Listener = require('../types/Listener')

function listenRespondImage (message, map) {
  var messageContentLowerCase = message.content.toLowerCase()
  if (messageContentLowerCase in imageRespondConfig) {
    let url = imageRespondConfig[messageContentLowerCase]
    let embed = createGifEmbed(url, message)
    utility.channelSendEmbed(message, embed)
    message.delete()
  }

  if (!state.get('animatedEmojiMap')) {
    return
  }

  var animatedEmojiMap = state.get('animatedEmojiMap')

  if (messageContentLowerCase in animatedEmojiMap) {
    let url = animatedEmojiMap[messageContentLowerCase]
    let embed = createGifEmbed(url, message)
    utility.channelSendEmbed(message, embed)
    message.delete()
  }
}

module.exports = Listener({
  receive: listenRespondImage
})
