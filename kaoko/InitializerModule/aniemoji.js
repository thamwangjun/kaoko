function initialize (client, cache) {
  var guildId = process.env.BOT_SERVER_ID
  var animatedEmojiMap = client.guilds.resolve(guildId).emojis.cache.clone()
  var nameUrlEmojiMap = {}
  animatedEmojiMap.filter((emoji) => {
    return emoji.animated === true
  }).array()
    .forEach((emoji) => {
      nameUrlEmojiMap[emoji.name.toLowerCase()] = emoji.url
    })
  cache.store('animatedEmojiMap', nameUrlEmojiMap)
}

module.exports = {
  initialize: initialize
}
