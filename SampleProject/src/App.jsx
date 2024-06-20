import { useState } from 'react'
import './App.css'

function App() {

const [counter, setCounter] = useState(5)
  // let counter = 5


  const add  = () =>{
   setCounter(counter + 1)
  }

  const leave = () =>{
    setCounter(counter -1 )
  }

  
  return (
    <>
     <h1>Let's Write some Code</h1>
     <h2>No of Passenger : {counter}</h2>

     <button
     onClick={add}
     >Coming Passenger</button> <br /><br />
     <button
     onClick={leave}
     >Leaving Passenger</button>
    </>
  )
}

export default App
