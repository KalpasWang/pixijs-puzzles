import * as PIXI from 'pixi.js'
import { globals } from './global'

export const setup = () => {
  globals.app = PIXI.Application({
    resizeTo: window
  })
}
