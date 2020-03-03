var Listener = require('./Listener')

function allListenersReceive (message, map) {
  for (let listener of this.listeners) {
    let currentInitializer = Listener(listener)
    currentInitializer.receive(message, map)
  }
}

var listenerModules = {
  listeners: [
    require('./imageRespond')
  ],
  allListenersReceive: allListenersReceive
}

module.exports = listenerModules
