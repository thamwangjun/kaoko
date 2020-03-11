var { struct } = require('superstruct')

var InitializerModuleDependencies = struct({
  aniemojiInitializerDependencies: require('./aniemojiInitializer')
})

module.exports = InitializerModuleDependencies
