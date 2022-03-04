import * as PIXI from 'pixi.js'
import { globals } from './global'

export const createScene = () => {
  const container = new PIXI.Container()
  // console.log(loadedResources)
  const bg = new PIXI.Texture(globals.loadedResources['bg'].texture)
  bg.width = window.innerWidth
  bg.height = window.innerHeight
  container.addChild(bg)
  globals.app.addChild(container)
}
