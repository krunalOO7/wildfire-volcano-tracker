/* eslint-disable react/jsx-key */
import{MapContainer,TileLayer,ZoomControl} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MarkersLoc from './MarkersLoc.jsx'

// eslint-disable-next-line react/prop-types
const Map = ({eventData}) => {

 
  // eslint-disable-next-line react/prop-types
  const markers = eventData.map(ev => {
    if(ev.categories[0].id===8 || ev.categories[0].id===12){
      return <MarkersLoc  eventId={ev.categories[0].id}
                          lat={ev.geometries[0].coordinates[1]} 
                          lon={ev.geometries[0].coordinates[0]} 
                          id={ev.id}  
                          title={ev.title}
                         
              />
    }

    return null
  })
  return (
    
    <div>
      <MapContainer center={[23.0225,72.5714]} zoom={5} scrollWheelZoom={false} zoomControl={false} minZoom={3} >
      <TileLayer 
       noWrap={false}
       
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      <ZoomControl position='bottomright'/>
    </MapContainer>
    </div>
  )
}

export default Map