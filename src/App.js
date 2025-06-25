import { useState } from 'react';
import Form from './Components/Form';
import GoogleMap from'./Components/GoogleMap'

function App() {
  const[show, setShow]=useState(null)
  return (
    <div>
      <div className='flex items-center justify-center m-2'>
        <button onClick={()=>setShow(!show)} className='p-2 rounded text-white bg-blue-500'>{show ? 'Click here to see Form' : 'Click here to see GoogleMap'}</button>
      </div>
      
      {show ? <GoogleMap/> :
      <Form/>}
    </div>
  );
}

export default App;
