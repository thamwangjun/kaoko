function createListenerDependencies () {
  return {
    ListenerModule: require('../../kaoko/ListenerModule'),
    cache: require('../../kaoko/cache'),
    ImageRespondModule: require('../../kaoko/ListenerModule/imageRespond'),
    UtilityModule: require('../../kaoko/utilityModule'),
    GifEmbed: require('../../kaoko/embeds/GifEmbed')
  }
}

module.exports = createListenerDependencies
