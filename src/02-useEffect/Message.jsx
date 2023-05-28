import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})

    useEffect(() => {
        const mouseEvent = ({ x, y }) => {
            const coord = {x, y};
            setCoords(coord);
            console.log(coord)
        }
        window.addEventListener('mousemove', mouseEvent);

        return () => {
            window.removeEventListener('mousemove', mouseEvent);
        }
    }, [])

    return (
        <>
            <h1>Usuario ya existe</h1>
            { JSON.stringify(coords)}
        </>
        
    )
}
