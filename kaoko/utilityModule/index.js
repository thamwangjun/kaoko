
function channelSendEmbed (messageObj, messageOptions) {
  return replyChannel(messageObj, '', messageOptions)
}

function replyChannel (messageObj, messageString, messageOptions) {
  return messageObj.channel.send(messageString, messageOptions)
}

function isMentioningBot (message) {
  var botUser = message.client.user
  return message.mentions.has(botUser.id)
}

exports.channelSendEmbed = channelSendEmbed
exports.isMentioningBot = isMentioningBot
exports.replyChannel = replyChannel
