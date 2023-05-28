import React, { useState } from 'react'
import { CounterHook } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

  const {counter, incrementar, decrementar, reset} = CounterHook();

  return (
    <>
        <h1>Counter With Custom Hook</h1>
        <h1>{counter}</h1>
        <hr />
        <button className='btn btn-primary' onClick={ () => incrementar (20)}>+1</button>
        <button className='btn btn-primary' onClick={reset}>Reset</button>
        <button className='btn btn-primary' onClick={() => decrementar (1)} >-1</button>
    </>
    

  )
}
