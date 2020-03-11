var AniemojiInitializerDependencies = require('../dependencyTypes/aniemojiInitializer')

function createAniemojiDeps () {
  return AniemojiInitializerDependencies({
    state: require('../state')
  })
}

exports.createAniemojiDeps = createAniemojiDeps
