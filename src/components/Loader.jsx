import {BeatLoader} from 'react-spinners'
import '../index.css'


const Spinner = () => {
  return (
   <div className='loader'>
      <BeatLoader
        color="firebrick"
        loading
        size={20}
        aria-label="Loading Spinner"
      />
      <h2>Fetching data...</h2>
   </div>
  )
}

export default Spinner