var { struct } = require('superstruct')

var ListenerModuleDependencies = struct({
  imageRespondDependencies: require('./imageRespond')
})

module.exports = ListenerModuleDependencies
