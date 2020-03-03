var { struct } = require('superstruct')

var Listener = struct({
  receive: 'function'
})

module.exports = Listener
