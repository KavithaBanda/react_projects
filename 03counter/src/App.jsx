import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter]= useState(0)
 const addValue=()=>{
  setCounter(counter+1)
 }
 const removeValue=()=>{
  setCounter(counter-1)
 }
  return (
    <>
    <h1>Increement and Decreement Counter using Buttons</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Increement value</button>
    <br/>
    <button onClick={removeValue}>Decreement value</button>
    </>
  )
}

export default App
