import React, { useState } from 'react'

const Counter = () => {

    let counter = 0;

    let [count, setCount] = useState(counter)

    const handleClick = () => {
        for(let i = 0; i < 10; i++) {
            setCount( prevState => prevState + 1 );
            /*
                prevSTate => 0 + 1 = 1
                prevState => 1 + 1 = 2
                prevState => 2 + 1 = 3
                .... until the loop finishes and then it updates the state
            */
        }
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCount( prev => prev + 1)}>INCREMENT</button>
        <button onClick={() => setCount(prev => prev - 1)}>DECREMENT</button>
        <button onClick={() => setCount(counter)}>RESET</button>
        <button onClick={() => handleClick()}>INCREMENT BY 10</button>
    </div>
  )
}

export default Counter;