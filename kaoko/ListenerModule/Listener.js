var { struct } = require('superstruct')

var Listener = struct.interface({
  receive: 'function'
})

module.exports = Listener
