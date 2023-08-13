/* eslint-disable react/prop-types */
import { Marker,Popup } from "react-leaflet"
import {forestFireLogo,volcanoLogo} from '../assets/Logos.js'

const MarkersLoc = (props) => {

  return (
    <Marker icon={props.eventId===8?forestFireLogo:volcanoLogo} 
        position={[props.lat,props.lon]}> 
        <Popup>
          <p><i>{props.id}</i></p>
          <p><b>{props.title}</b></p>
        </Popup>
       </Marker>
  )
}

export default MarkersLoc