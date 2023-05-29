import React, { useState } from 'react'
import CounterHook from '../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

  const {counter, incrementar} = CounterHook(1);

  const [valorPadre, setvalorPadre] = useState(true);
  return (
    <>
        <h1>Counter: <Small counter={counter} />  </h1>
        <hr />
        <button className='btn btn-primary' onClick={()=> incrementar(2)}>+1</button>
        <div>{ JSON.stringify(valorPadre)}</div>
        <button 
            className='btn btn-outline-primary'
            onClick={()=>{setvalorPadre(!valorPadre)}}>Renderizar Componente</button>
    </>
  )
}
