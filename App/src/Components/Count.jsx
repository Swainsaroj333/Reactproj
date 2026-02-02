import React, {useState} from 'react'

export default function Count() {
    let [count, setCount] = useState(1)
    const inc = () => {
        setCount (count = count + 1)
    }
  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={inc}>Increment Count</button>
      <button onClick={() => setCount(count--)}>Decrement Count</button>
       <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
