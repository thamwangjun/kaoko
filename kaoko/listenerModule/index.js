
function allListenersReceive (message, map) {
  for (let listener of this.listeners) {
    listener.receive(message, map)
  }
}

var listenerModule = {
  listeners: [
    require('./imageRespond')
  ],
  allListenersReceive: allListenersReceive
}

module.exports = listenerModule
