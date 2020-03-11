var Initializer = require('./InitializerModule')
var InitializerModuleDependencies = require('../dependencyTypes/initializerModule')

var initializersList = [
  require('./aniemoji')
]

function initializeAll (client, dependencies) {
  var initializerModuleDependencies = InitializerModuleDependencies(dependencies)
  for (let initializer of this.initializers) {
    let currentInitializer = Initializer(initializer)
    currentInitializer.initialize(client, initializerModuleDependencies)
  }
}

var initializerModules = {
  initializers: initializersList,
  initializeAll: initializeAll
}

module.exports = initializerModules
