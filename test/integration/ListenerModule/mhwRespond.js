const test = require('ava')
const createListenerDependencies = require('../../../testUtils/utilityFunctions/createListenerDependencies')
const MhwRespond = require('../../../kaoko/ListenerModule/mhwRespond')

test('mhwRespond-jagras', t => {
  var testDeps = createListenerDependencies()
  var moduleInstance = new testDeps.ListenerModule(testDeps.cache)
  var respondInstance = new MhwRespond(testDeps.UtilityModule.channelSendEmbed)
  moduleInstance.loadListeners(respondInstance)

  var mockMessageObj = {
    content: '-mon jagras',
    channel: {
      send: function (messageString, messageOptions) {
        t.is(messageOptions.title, '__**Great Jagras**__')
      }
    }
  }

  respondInstance.receive(mockMessageObj)
})
