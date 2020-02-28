var Initializer = require('../types/Initializer')

function initializeAll (client) {
  for (let initializer of this.initializers) {
    let currentInitializer = Initializer(initializer)
    currentInitializer.initialize(client)
  }
}

var initializerModules = {
  initializers: [
    require('./aniemoji')
  ],
  initializeAll: initializeAll
}

module.exports = initializerModules
