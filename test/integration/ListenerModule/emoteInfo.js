const test = require('ava')
const createListenerDependencies = require('../../../testUtils/utilityFunctions/createListenerDependencies')
const EmoteInfo = require('../../../kaoko/ListenerModule/emoteInfo')
const EmoteInfoEmbed = require('../../../kaoko/embeds/EmoteInfoEmbed')

test('emote info emoji in message -success', t => {
  var testDeps = createListenerDependencies()
  var moduleInstance = new testDeps.ListenerModule(testDeps.cache)
  var emoteInfoInstance = new EmoteInfo(
    testDeps.UtilityModule.channelSendEmbed,
    testDeps.UtilityModule.isMentioningBot,
    EmoteInfoEmbed)
  moduleInstance.loadListeners(emoteInfoInstance)

  var mockMessageObj = {
    content: '@Kaoko gimote <:HARD:603679640485101610>',
    cleanContent: ' gimote <:HARD:603679640485101610>',
    channel: {
      send: function (messageString, messageOptions) {
        t.is(messageOptions.image.url, 'https://cdn.discordapp.com/emojis/603679640485101610.png')
      }
    },
    member: {
      nickname: 'testUserNickname',
      displayColor: 999
    },
    author: {
      username: 'testUsername',
      avatarURL: function () {
        return 'mockAvatarURL'
      }
    },
    delete: function () {
    },
    client: {
      user: {
        id: 'botUser'
      }
    },
    mentions: {
      has: function (id) {
        return id === 'botUser'
      }
    }
  }

  moduleInstance.receiveAll(mockMessageObj)
})
