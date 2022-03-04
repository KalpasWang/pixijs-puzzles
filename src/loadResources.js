import * as PIXI from 'pixi.js'
import { globals } from './global'

export function loadResources() {
  const loader = PIXI.Loader.shared
  for (let key in globals.resources) {
    loader.add(key, globals.resources[key])
  }
  loader.load((loader, resources) => {
    globals.loadedResources = resources
    console.log(globals.loadedResources)
  })
}
