var { struct } = require('superstruct')

var InitializerModule = struct.interface({
  initialize: 'function'
})

module.exports = InitializerModule
