const phaserAssetsLoader = require('../index.js')

module.exports = config => {
  return {
    name: 'phaser-assets-loader',
    config (_, { mode }) {
      const { exportJson, watch } = phaserAssetsLoader(config)
      exportJson()
      console.log('PhaserAssetsLoader: Initialized')
      if (mode === 'development') {
        console.log('PhaserAssetsLoader: Watching...')
        watch(() => {
          console.log('PhaserAssetsLoader: Reloaded')
        })
      }
    }
  }
}
