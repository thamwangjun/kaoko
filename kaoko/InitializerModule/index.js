var Initializer = require('./InitializerModule')

var initializersList = []

function loadInitializers (...initializers) {
  this.initializersList = this.initializersList.concat(initializers)
}

function initializeAll (client, cache) {
  for (let item of this.initializersList) {
    let initializer = Initializer(item)
    initializer.initialize(client, cache)
  }
}

var initializerModule = {
  initializersList: initializersList,
  initializeAll: initializeAll,
  loadInitializers: loadInitializers
}

module.exports = initializerModule
