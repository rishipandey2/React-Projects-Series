
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style = {{backgroundColor:color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl">
  <button 
  onClick={()=> setColor("red")}
  className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'red'}}
  >Red</button>


<button
onClick={()=> setColor("green")}
className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'green'}}
  >Green</button>


<button 
onClick={()=> setColor("blue")}
className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'blue'}}
  >Blue</button>


<button onClick={()=> setColor("gray")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'gray'}}
  >Gray</button>

<button onClick={()=> setColor("brown")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'brown'}}
  >Brown</button>

<button onClick={()=> setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'orange'}}
  >Orange</button>


<button onClick={()=> setColor("aqua")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'aqua'}}
  >Aqua</button>

<button onClick={()=> setColor("fuchsia")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'fuchsia'}}
  >Fucsia</button>

<button onClick={()=> setColor("lime")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'lime'}}
  >Lime</button>

<button onClick={()=> setColor("maroon")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'maroon'}}
  >Maroon</button>

<button onClick={()=> setColor("navy")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'navy'}}
  >Navy</button>

<button onClick={()=> setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'olive'}}
  >Olive</button>

<button onClick={()=> setColor("silver")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'silver'}}
  >Silver</button>

<button onClick={()=> setColor("teal")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'teal'}}
  >Teal</button>

<button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white  '
  style={{backgroundColor:'yellow'}}
  >Yellow</button>
</div>
        </div>
    </div>


  )
}

export default App
