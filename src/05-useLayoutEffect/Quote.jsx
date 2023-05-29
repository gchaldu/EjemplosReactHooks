import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({quote, author}) => {

    const [boxSize, setboxSize] = useState(
            {
                width:0,
                height:0
            }
        )
    //quiero ver cuando cambia de tamaño mi tamaña del parrafo
    const parrafo = useRef();
    const tamanoParrafo = ()=>{
        const {width, height} = parrafo.current.getBoundingClientRect();

        setboxSize(
            {
                width: width,
                height: height
            });
    }

    useLayoutEffect(() => {
      tamanoParrafo();
    
     
    }, [quote])
    return (
        <>
            <blockquote style={{ display: 'flex'}} className='blockquote text-end'>
                <p ref={parrafo} className='mb-1'>" {quote} "</p>
                <footer className='blockquote-footer'>{author}</footer>
            </blockquote>
            <div>{JSON.stringify(boxSize)}</div>
        </>
    )
}
