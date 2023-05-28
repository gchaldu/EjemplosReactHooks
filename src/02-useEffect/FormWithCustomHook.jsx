import React, { useEffect } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

const FormWithCustomHook = () => {
    
    const {formState, onChangeForm, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
      })
    
      const { username, email, password } = formState;
    
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
          <h1>Formulario with custom hook</h1>
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
          <input type="password"
            className='form-control mt-2'
            placeholder='Password'
            name="password"
            value={password}
            onChange={onChangeForm}
          />
          {
            /* (username === 'gchaldu') ? <Message /> : null */
          }
        <button onClick={onResetForm} className='btn btn-primary'>Reset Form</button>
        </>
    
      )
}
export default FormWithCustomHook