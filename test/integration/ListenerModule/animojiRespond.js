const test = require('ava')
const createListenerDependencies = require('../../../testUtils/utilityFunctions/createListenerDependencies')

test('animojiRespond-success', t => {
  var testDeps = createListenerDependencies()
  var moduleInstance = new testDeps.ListenerModule(testDeps.cache)
  var mockConfig = {}
  var imageRespondInstance = new testDeps.ImageRespondModule(
    testDeps.GifEmbed.create,
    testDeps.UtilityModule.channelSendEmbed,
    mockConfig,
    testDeps.cache)
  moduleInstance.loadListeners(imageRespondInstance)
  testDeps.cache.store('animatedEmojiMap', { kekw: 'kekwURL' })

  var mockMessageObj = {
    content: 'kekw',
    channel: {
      send: function (messageString, messageOptions) {
        t.is('', messageString)
        t.is(messageOptions.image.url, 'kekwURL')
        t.is(messageOptions.author.name, 'testUserNickname')
        t.is(messageOptions.author.iconURL, 'mockAvatarURL')
        t.is(messageOptions.color, 999)
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
    }
  }

  moduleInstance.receiveAll(mockMessageObj)
})
