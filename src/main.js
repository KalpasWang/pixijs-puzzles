import * as PIXI from 'pixi.js'
import { resources } from './resources'
import './style.css'

const app = new PIXI.Application({
  resizeTo: window
})
console.log(app)
document.body.appendChild(app.view)

// load resources
const loader = PIXI.Loader.shared
for (let key in resources) {
  loader.add(key, resources[key])
}

loader.load((loader, loadedResources) => {
  init(loadedResources)
})

function init(resources) {
  const container = new PIXI.Container()
  const bg = new PIXI.Sprite(resources['bg'].texture)
  bg.width = window.innerWidth
  bg.height = window.innerHeight
  container.addChild(bg)
  app.stage.addChild(container)
}
