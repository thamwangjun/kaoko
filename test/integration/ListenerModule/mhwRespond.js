const test = require('ava')
const createListenerDependencies = require('../../../testUtils/utilityFunctions/createListenerDependencies')
const MhwRespond = require('../../../kaoko/ListenerModule/mhwRespond')

test('mhwRespond-jagras', t => {
  var testDeps = createListenerDependencies()
  var moduleInstance = new testDeps.ListenerModule(testDeps.cache)
  var respondInstance = new MhwRespond(testDeps.UtilityModule.channelSendEmbed, testDeps.UtilityModule.replyChannel)
  moduleInstance.loadListeners(respondInstance)

  var mockMessageObj = {
    content: '-mon jagras',
    channel: {
      send: function (messageString, messageOptions) {
        t.truthy(messageOptions)
        t.is(messageOptions.title, '__**Great Jagras**__')
      }
    }
  }

  respondInstance.receive(mockMessageObj)
})

test.skip('mhwRespond-ruan', t => {
  var testDeps = createListenerDependencies()
  var moduleInstance = new testDeps.ListenerModule(testDeps.cache)
  var respondInstance = new MhwRespond(testDeps.UtilityModule.channelSendEmbed, testDeps.UtilityModule.replyChannel)
  moduleInstance.loadListeners(respondInstance)

  var mockMessageObj = {
    content: '-mon Ruan',
    channel: {
      send: function (messageString, messageOptions) {
        t.falsy(messageOptions)
        t.is(messageString, 'Ruan, There\'s no such monster bruh...')
      }
    }
  }

  respondInstance.receive(mockMessageObj)
})

test('mhwRespond-poogie', t => {
  var testDeps = createListenerDependencies()
  var moduleInstance = new testDeps.ListenerModule(testDeps.cache)
  var respondInstance = new MhwRespond(testDeps.UtilityModule.channelSendEmbed, testDeps.UtilityModule.replyChannel)
  moduleInstance.loadListeners(respondInstance)

  var mockMessageObj = {
    content: '-mon poogie',
    channel: {
      send: function (messageString, messageOptions) {
        t.falsy(messageOptions)
        t.is(messageString, 'poogie, There isn\'t such a monster bruh...')
      }
    }
  }

  respondInstance.receive(mockMessageObj)
})
