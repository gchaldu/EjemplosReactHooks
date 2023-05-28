import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState(
    {
      username: 'gchaldu',
      email: 'gchaldu@email.com',
    }
  )

  const { username, email } = formState;

  const onChangeForm = ({ target }) => {

    const { name, value } = target;

    setFormState(
      {
        ...formState,
        [name]: value
      }
    )
  }

  useEffect(() => {
    //console.log('init form')
  }, [])

  useEffect(() => {
    //console.log('se actualizando el form')
  }, [formState])

  useEffect(() => {
    //console.log('actualizando el email')
  }, [email])

  return (
    <>
      <h1>Simple Form</h1>
      <input type="text"
        className='form-control'
        placeholder='Username'
        name="username"
        value={username}
        onChange={onChangeForm}
      />
      <input type="email"
        className='form-control mt-2'
        placeholder='email@mail.com'
        name="email"
        value={email}
        onChange={onChangeForm}
      />
      {
        (username === 'gchaldu') ? <Message /> : null
      }

    </>

  )
}
