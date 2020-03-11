var Listener = require('./Listener')
var ListenerModuleDependencies = require('../dependencyTypes/listenerModule')

var listenersList = [
  require('./imageRespond')
]

function allListenersReceive (message, dependencies, state) {
  var listenerModuleDependencies = ListenerModuleDependencies(dependencies)
  for (let listener of this.listeners) {
    let currentInitializer = Listener(listener)
    currentInitializer.receive(message, listenerModuleDependencies, state)
  }
}

var listenerModules = {
  listeners: listenersList,
  allListenersReceive: allListenersReceive,
  ListenerModuleDependencies: ListenerModuleDependencies
}

module.exports = listenerModules
