import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    const getFetch = async () => {

        try {
            const res = await fetch(url);
            const data = await res.json();
            setState(
                {
                    ...state,
                    data,
                    isLoading: false
                });
        }catch(error)
        {
            setState(
                {
                    data:null,
                    isLoading:false,
                    error: 'Error en la solicitud a la API'
                }
            )
        }
        
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
