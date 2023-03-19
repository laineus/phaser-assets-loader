const phaserAssetsLoader = require('../index.js')

module.exports = class {
  constructor (settings) {
    this.settings = settings
  }
  apply (compiler) {
    this.projectRoot = compiler.context
    const { exportJson, watch } = phaserAssetsLoader(this.settings, { projectRoot: compiler.context })
    compiler.hooks.afterEnvironment.tap('AssetsPlugin', () => {
      exportJson()
      console.log('PhaserAssetsLoader: Initialized')
      if (compiler.options.mode === 'development') {
        console.log('PhaserAssetsLoader: Watching...')
        watch(() => {
          console.log('PhaserAssetsLoader: Reloaded')
        })
      }
    })
  }
}
