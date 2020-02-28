
function initializeAll (client) {
  for (let initializer of this.initializers) {
    initializer.initialize(client)
  }
}

var initializerModule = {
  initializers: [
    require('./aniemoji')
  ],
  initializeAll: initializeAll
}

module.exports = initializerModule
