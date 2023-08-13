import Map from "./components/Map"
import { useState,useEffect } from "react"
import Loader from "./components/Loader"
import Header from "./components/Header"
const App = () => {

  const [eventData,setEventData] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect (()=>{
    const fetchEvents= async ()=>{
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const{events }= await res.json()
      setEventData(events)
      setLoading(false)
     
      // console.log(eventData)
    }
    fetchEvents()
    

    
  },[])

  return (
    
    <div> 
      <Header/>
      {
        loading ? <Loader/> : <Map eventData={eventData}/>
      }
    </div>
  )
}

export default App