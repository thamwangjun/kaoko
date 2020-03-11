var Listener = require('./Listener')
var ImageRespondDependencies = require('../dependencyTypes/imageRespond')

function listenRespondImage (message, dependencies, state) {
  var imageRespondDependencies = ImageRespondDependencies(dependencies.imageRespondDependencies)

  respondWithGif(message, imageRespondDependencies)

  respondWithAnimoji(message, imageRespondDependencies, state)
}

function respondWithGif (message, imageRespondDependencies) {
  var createGifEmbed = imageRespondDependencies.createGifEmbed
  var channelSendEmbed = imageRespondDependencies.channelSendEmbed
  var imageRespondConfig = imageRespondDependencies.imageRespondConfig

  var messageContentLowerCase = message.content.toLowerCase()
  if (messageContentLowerCase in imageRespondConfig) {
    let url = imageRespondConfig[messageContentLowerCase]
    let embed = createGifEmbed(url, message)
    channelSendEmbed(message, embed)
    message.delete()
  }
}

function respondWithAnimoji (message, imageRespondDependencies, state) {
  var createGifEmbed = imageRespondDependencies.createGifEmbed
  var channelSendEmbed = imageRespondDependencies.channelSendEmbed

  if (!state.get('animatedEmojiMap')) {
    return
  }

  var animatedEmojiMap = state.get('animatedEmojiMap')
  var messageContentLowerCase = message.content.toLowerCase()

  if (messageContentLowerCase in animatedEmojiMap) {
    let url = animatedEmojiMap[messageContentLowerCase]
    let embed = createGifEmbed(url, message)
    channelSendEmbed(message, embed)
    message.delete()
  }
}

module.exports = Listener({
  receive: listenRespondImage
})
