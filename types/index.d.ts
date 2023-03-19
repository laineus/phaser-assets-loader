
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
  export default function phaserAssetsLoader(settings: Settings, option?: Option ): {
    exportJson: () => void
    watch: (callbackFn: () => void) => void
  }
}

declare module 'phaser-assets-loader/plugins/rollupPlugin' {
  export default function phaserAssetsRollupPlugin(settings: Settings): {
    name: string
    config: () => void
  }
}

declare module 'phaser-assets-loader/plugins/webpackPlugin' {
  export default class PhaserAssetsWebpackPlugin {
    constructor (settings: Settings)
  }
}

export interface PhaserAssets {
  [key: string]: [name: string, path: string | string[], spritesheet?: {
    frameWidth: number
    frameHeight: number
    startFrame: number
    endFrame: number
  }][]
}
