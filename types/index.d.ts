
type AssetTypes = AssetTypesWithFile | AssetTypesWithFiles | AssetTypesWithFileOrFiles | AssetTypesSpritesheet
type AssetTypesWithFile = 'animation'
  | 'aseprite'
  | 'binary'
  | 'css'
  | 'glsl'
  | 'html'
  | 'htmlTexture'
  | 'json'
  | 'multiatlas'
  | 'obj'
  | 'pack'
  | 'plugin'
  | 'sceneFile'
  | 'sceneFile'
  | 'script'
  | 'svg'
type AssetTypesWithFiles = 'scripts'
type AssetTypesWithFileOrFiles = 'aseprite'
  | 'atlas'
  | 'atlasXML'
  | 'audio'
  | 'audioSprite'
  | 'bitmapFont'
  | 'image'
  | 'unityAtlas'
  | 'video'
type AssetTypesSpritesheet = 'spritesheet'

interface Pattern {
  type: AssetTypes
  prefix?: string
  dir: string
  rule: RegExp
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

export type PhaserAssets = {
  [key in AssetTypesWithFile]?: [name: string, path: string][]
} & {
  [key in AssetTypesWithFiles]?: [name: string, path: string[]][]
} & {
  [key in AssetTypesWithFileOrFiles]?: [name: string, path: string | string[]][]
} & {
  [key in AssetTypesSpritesheet]?: [name: string, path: string, spritesheet: {
    frameWidth: number
    frameHeight: number
    startFrame: number
    endFrame: number
  }][]
}
