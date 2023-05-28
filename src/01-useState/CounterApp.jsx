import React, { useState } from 'react'

export const CounterApp = () => {

  const [{counter1, counter2, counter3}, setCount] = useState(
    {counter1: 10, counter2: 20, counter3: 30}
  );

  const incrementar = () => {
    setCount(
        {
            counter1: counter1+1,
            counter2,
            counter3
        });
  }

  return (
    <>
        <h1>Counter App</h1>

        <hr />
        <h2>{counter1}</h2>
        <h2>{counter2}</h2>
        <h2>{counter3}</h2>
        <button className='btn btn-primary' onClick={incrementar}>+1</button>
    </>
  )
}
