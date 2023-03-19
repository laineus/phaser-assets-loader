
interface Pattern {
  type: string
  prefix?: string
  dir: string
  rule: RegExp
  callback?: (list: [assetKeyName: string, url: string, spriteSheetOption?: any]) => void
}

interface Settings {
  patterns: Pattern[]
  documentRoot?: string
  output?: string
  spriteSheetSettingsFileName?: string
}

interface Option {
  projectRoot?: string
}

declare module 'phaser-assets-loader' {
  declare function phaserAssetsLoader(settings: Settings, option?: Option ): {
    exportJson: () => void
    watch: (callbackFn: () => void) => void
  }
  export default phaserAssetsLoader
}

declare module 'phaser-assets-loader/rollupPlugin' {
  declare function phaserAssetsRollupPlugin(settings: Settings): {
    name: string
    config: () => void
  }
  export default phaserAssetsRollupPlugin
}

declare module 'phaser-assets-loader/webpackPlugin' {
  declare class PhaserAssetsWebpackPlugin {
    constructor (settings: Settings)
  }
  export default PhaserAssetsWebpackPlugin
}

export interface PhaserAssets {
  [key: string]: [name: string, path: string | string[], spritesheet?: {
    frameWidth: number
    frameHeight: number
    startFrame: number
    endFrame: number
  }][]
}
