
function allListenersReceive (message, map) {
  for (let listener of this.listeners) {
    listener.receive(message, map)
  }
}

var listenerModules = {
  listeners: [
    require('./imageRespond')
  ],
  allListenersReceive: allListenersReceive
}

module.exports = listenerModules
