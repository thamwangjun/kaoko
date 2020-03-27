var Initializer = require('./InitializerModule')

var initializersList = [
  require('./aniemoji')
]

function initializeAll (client, cache) {
  for (let item of this.initializersList) {
    let initializer = Initializer(item)
    initializer.initialize(client, cache)
  }
}

var initializerModules = {
  initializersList: initializersList,
  initializeAll: initializeAll
}

module.exports = initializerModules
