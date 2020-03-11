var ImageRespondDependencies = require('../dependencyTypes/imageRespond')

function createImageRespondDependency () {
  return ImageRespondDependencies({
    createGifEmbed: require('../embeds/gifEmbed').createGifEmbed,
    channelSendEmbed: require('../utilityModule').channelSendEmbed,
    imageRespondConfig: require('../../kaokoConfigs/imageRespondConfig.json')
  })
}

exports.createImageRespondDependency = createImageRespondDependency
