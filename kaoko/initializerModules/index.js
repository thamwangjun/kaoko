
function initializeAll (client) {
  for (let initializer of this.initializers) {
    initializer.initialize(client)
  }
}

var initializerModules = {
  initializers: [
    require('./aniemoji')
  ],
  initializeAll: initializeAll
}

module.exports = initializerModules