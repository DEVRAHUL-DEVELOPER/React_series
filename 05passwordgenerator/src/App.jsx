import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [n_allowed,setNumAllowed] = useState(false)
  const [c_allowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator=useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(n_allowed) str +="0123456789"
    if(c_allowed) str +="!@#$%&*?><}{~|[]_+-()"

    for(let i=1;i<Array.length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass=str.charAt(char)
    }
   setPassword(pass)


  },[length,n_allowed,c_allowed,password])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
     <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1  px-3'
        placeholder='password'
        readOnly
        />
        <button className=' outline-none bg-blue-700 text-white
        px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex text-sm gap-x-1'>
          <input type="range" 
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>length: {length}</label>
        </div>
        <div className='flex text-sm gap-x-1'>
          <input
           type="checkbox" 
           defaultChecked={n_allowed}
           id="numberInput"
           onChange={()=>{
                 setNumAllowed((pre)=>!pre);
           }}
          />
          <label ></label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
