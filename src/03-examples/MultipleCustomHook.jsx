import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { CounterHook } from '../hooks/useCounter';

export const MultipleCustomHook = () => {

    //https://api.breakingbadquotes.xyz/v1/quotes/1

    const {incrementar, counter} = CounterHook(1);
    const { data, isLoading, error } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);    
    console.log(!data);
    console.log(!!data);
    //el problema de la doble negacion es porque es un arreglo
    //el siguiente codigo se lee:
    //si la doble negacion de data es === true quiere decir que tengo retorno en la posicion 0
    const {quote, author} = (!!data === true) && data[0] 
    
    return (
        <>
            <h1>Breaking Bad</h1>
            {
                (isLoading) ?<div className='alert alert-info text-center'>Cargando...</div>:null
            }
            <blockquote className='blockquote text-end'>Frase: " {quote} "
                <p className='mb-1'></p>
                <footer className='blockquote-footer'></footer>
            </blockquote>
            <h3>Autor: {author}</h3>
            {
                (error!=null) ? <div>error</div>:null 
            }
            <button onClick={() => incrementar (1)} className='btn btn-primary'>Next Quote</button>
        </>
    )
}
