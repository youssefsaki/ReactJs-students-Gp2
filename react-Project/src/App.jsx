import React, { useState } from "react"


function App() {

  // React.useState
  // console.log(useState())

  let [counter, setCounter] = useState(0) // [undefined -> state, function to update the state]

  const handleIncrement = () => {
    setCounter(counter++);
  }

  const handleDecrement = () => {
    setCounter(counter--)
  }

  const handleReset = () => {
    setCounter(0);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>INCREMENT</button>
      {counter === 0 ? <button disabled onClick={handleDecrement}>DECREMENT</button> : <button onClick={handleDecrement}>DECREMENT</button> }
      <button onClick={handleReset}>RESET</button>
    </div>
  )
}

export default App
