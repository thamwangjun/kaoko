var { struct } = require('superstruct')

var ImageRespondDependencies = struct({
  createGifEmbed: 'function',
  channelSendEmbed: 'function',
  imageRespondConfig: 'object'
})

module.exports = ImageRespondDependencies
