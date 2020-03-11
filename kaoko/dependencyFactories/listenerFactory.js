var ListenerModuleDependencies = require('../dependencyTypes/listenerModule')
var imageRespondFactory = require('./imageRespondFactory')

function createDependencies () {
  return ListenerModuleDependencies({
    imageRespondDependencies: imageRespondFactory.createImageRespondDependency()
  })
}

exports.createDependencies = createDependencies
