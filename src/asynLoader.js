import * as PIXI from 'pixi.js'
import { Texture } from 'pixi.js'

export const asynLoader = (name, resouce) => {
  return new Promise(resolve => {
    const loader = PIXI.Loader.shared
    loader.add(name, resouce)
      .load(Loader, loadedResource) => {
        resolve(new Texture(loadedResource[name].texture))
      }
  })
})