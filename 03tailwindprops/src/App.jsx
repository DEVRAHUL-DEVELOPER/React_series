import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {

    let myobj={
        name:"rahul",
        id:12
    }

  return (
    <>
    <h1 className='bg-green-500 text-black p-4 rounded-3xl'>Tailwind Test</h1>

  <Card username='Rahul'  btnText="click me" />

  <Card username='Rohit' btnText='visit me' />
    </>
  )
}

export default App
