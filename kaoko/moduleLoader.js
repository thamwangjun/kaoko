var moduleConfig = require('../kaokoConfigs/config.json').modules
var imageRespondConfig = require('../kaokoConfigs/imageRespondConfig.json')

function loadModules (listenerModule, initializerModule, GifEmbed, UtilityModule, cache, EmoteInfoEmbed) {
  if (moduleConfig.imageRespond) {
    var ImageRespondModule = require('./ListenerModule/imageRespond')
    listenerModule.loadListeners(new ImageRespondModule(GifEmbed.create, UtilityModule.channelSendEmbed, imageRespondConfig, cache))
  }

  if (moduleConfig.mhwRespond) {
    var MhwRespond = require('./ListenerModule/mhwRespond')
    listenerModule.loadListeners(new MhwRespond(UtilityModule.channelSendEmbed, UtilityModule.replyChannel))
  }

  if (moduleConfig.animoji) {
    var Animoji = require('./InitializerModule/aniemoji')
    initializerModule.loadInitializers(Animoji)
  }

  if (moduleConfig.emoteInfo) {
    var EmoteInfo = require('./ListenerModule/emoteInfo')
    listenerModule.loadListeners(new EmoteInfo(UtilityModule.channelSendEmbed, UtilityModule.isMentioningBot, UtilityModule.replyChannel, EmoteInfoEmbed))
  }
}

exports.loadModules = loadModules
