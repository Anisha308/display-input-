import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'


function Type() {
  const [input, setInput] = useState('')
  const[inputlist,setInputList]=useState([])


  const addInput = (e) => {
    e.preventDefault();
    setInputList([...inputlist,input])
    setInput("");
  }
  return (
    <div>
      <h2>Type Here!!!</h2>
      <form>
        <input type='text' value={input} placeholder='Fill out' onChange={(e) => setInput(e.target.value)} />
        <button onClick={addInput}>click me</button>
      </form>

      
        <ul>
          {inputlist.map((items,index)=>(
            <li key={index}>{items}</li>
          ))
          }
      </ul>
        
      
    </div>
  );
}

export default Type