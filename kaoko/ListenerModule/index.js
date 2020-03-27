var Listener = require('./Listener')

function ListenerModule (cache) {
  this.cache = cache
  this.listenersList = []
  this.loadListeners = loadListeners
  this.receiveAll = receiveAll
}

function loadListeners (...listeners) {
  this.listenersList = this.listenersList.concat(listeners)
}

function receiveAll (message) {
  for (let item of this.listenersList) {
    let listener = Listener(item)
    listener.receive(message)
  }
}

module.exports = ListenerModule
