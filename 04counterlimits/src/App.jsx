import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)

  const addValue=()=>{
    if(counter+1<21)
     setCount(counter+1)
  }
  const removeValue=()=>{
    if(counter-1>=0){
      setCount(counter-1)
  }
    }
    
  return (
    <><h1>Counter counts between 0 and 20</h1>
  <h2>Counter: {counter}</h2>
  <button onClick={addValue}>Increement</button>
  <br/>
  <button onClick={removeValue}>Decreement</button>
    </>
  )
}

export default App
