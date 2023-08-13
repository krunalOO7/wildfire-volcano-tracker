import { Icon } from 'leaflet'
import fireforestlogo from './wildfire.png'
import volcanologo from './volcano.png'



export const forestFireLogo = new Icon({
  iconUrl:fireforestlogo,
  iconSize:[28,28]
}
)


export const volcanoLogo = new Icon({
  iconUrl:volcanologo,
  iconSize:[18,18]
})
