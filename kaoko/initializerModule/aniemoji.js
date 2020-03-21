var Initializer = require('./InitializerModule')
var AniemojiInitializerDependencies = require('../dependencyTypes/aniemojiInitializer')

function initialize (client, dependencies) {
  var aniemojiInitializerDependencies = AniemojiInitializerDependencies(dependencies.aniemojiInitializerDependencies)
  var state = aniemojiInitializerDependencies.state

  var guildId = process.env.BOT_SERVER_ID
  var animatedEmojiMap = client.guilds.resolve(guildId).emojis.cache.clone()
  var nameUrlEmojiMap = {}
  animatedEmojiMap.filter((emoji) => {
    return emoji.animated === true
  }).array()
    .forEach((emoji) => {
      nameUrlEmojiMap[emoji.name.toLowerCase()] = emoji.url
    })
  state.store('animatedEmojiMap', nameUrlEmojiMap)
}

module.exports = Initializer({
  initialize: initialize
})
