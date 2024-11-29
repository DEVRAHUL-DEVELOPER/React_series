import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter,setCounter] = useState(0)


 // add function to decrease  value
  const addValue=()=>{
    if(counter==20){
      useState(20)
      
    }

    counter=counter+1;
    setCounter(counter)
  }

// Remove function to decrease  value
  const removeValue=()=>{
    if(counter==0) {
      useState(0)
    }
    counter=counter-1;
    setCounter(counter)
  }

  return (
    <>
     <h1>hello react</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
