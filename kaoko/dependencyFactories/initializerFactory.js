var aniemojiFactory = require('./aniemojiFactory')
var InitializerModuleDependencies = require('../dependencyTypes/initializerModule')

function createDependencies () {
  return InitializerModuleDependencies({
    aniemojiInitializerDependencies: aniemojiFactory.createAniemojiDeps()
  })
}
exports.createDependencies = createDependencies
