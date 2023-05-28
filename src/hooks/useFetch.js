import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    const getFetch = async () => {

        const res = await fetch(url);
        if (!res.ok) {
            const e = new Error('Error en la solicitur');
            setState({...state, error:e});
            throw e;
        }
        const data = await res.json();
        setState(
            {
                ...state, 
                data:data, 
                isLoading:false});
    }
    useEffect(() => {
        getFetch();
    }, [url])

    return {
        //retorna una objeto json
        data: state.data,
        error: state.error,
        isLoading: state.isLoading
    }
}
