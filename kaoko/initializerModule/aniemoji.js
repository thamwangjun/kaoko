var state = require('../state')

function initialize (client) {
  var guildId = process.env.BOT_SERVER_ID
  var animatedEmojiMap = client.guilds.get(guildId).emojis.clone()
  var nameUrlEmojiMap = {}
  animatedEmojiMap.filter((emoji) => {
    return emoji.animated === true
  }).tap((emoji) => {
    nameUrlEmojiMap[emoji.name] = emoji.url
  })
  state.store('animatedEmojiMap', nameUrlEmojiMap)
}

module.exports = {
  initialize: initialize
}
