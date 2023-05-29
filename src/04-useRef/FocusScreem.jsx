import React, { useRef } from 'react'

export const FocusScreem = () => {

  const focus = useRef()

  console.log(focus)

  const hacerFoco = () => {
    focus.current.select();
  }

  return (
    
    <>
        <h1>Focus Screem</h1>
        <hr />

        <input 
            type="text" 
            placeholder='Ingrese su nombre'
            className='form-control'
            ref={focus}
            />

        <button onClick={hacerFoco} className='btn btn-primary' >
            Set Focus
        </button>
    </>
  )
}
