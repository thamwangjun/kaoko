function ImageRespondModule (createGifEmbed, channelSendEmbed, imageRespondConfig, cache) {
  this.createGifEmbed = createGifEmbed
  this.channelSendEmbed = channelSendEmbed
  this.imageRespondConfig = imageRespondConfig
  this.cache = cache
  this.receive = listenRespondImage
  this.respondWithGif = respondWithGif
  this.respondWithAnimoji = respondWithAnimoji
}

function listenRespondImage (message) {
  this.respondWithGif(message)

  this.respondWithAnimoji(message)
}

function respondWithGif (message) {
  var createGifEmbed = this.createGifEmbed
  var channelSendEmbed = this.channelSendEmbed
  var imageRespondConfig = this.imageRespondConfig

  var messageContentLowerCase = message.content.toLowerCase()
  if (messageContentLowerCase in imageRespondConfig) {
    let url = imageRespondConfig[messageContentLowerCase]
    let embed = createGifEmbed(url, message)
    channelSendEmbed(message, embed)
    message.delete()
  }
}

function respondWithAnimoji (message) {
  var createGifEmbed = this.createGifEmbed
  var channelSendEmbed = this.channelSendEmbed

  if (!this.cache.get('animatedEmojiMap')) {
    return
  }

  var animatedEmojiMap = this.cache.get('animatedEmojiMap')
  var messageContentLowerCase = message.content.toLowerCase()

  if (messageContentLowerCase in animatedEmojiMap) {
    let url = animatedEmojiMap[messageContentLowerCase]
    let embed = createGifEmbed(url, message)
    channelSendEmbed(message, embed)
    message.delete()
  }
}

module.exports = ImageRespondModule
