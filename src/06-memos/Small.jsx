import React,{memo} from 'react'

export const Small = memo (({counter}) => {
    console.log('me volvi a memorizar :(')
  return (
    <small>{counter}</small>
  )
})
