import React, { useState, useEffect } from "react";
import axios from 'axios';

export const useAxios = (url) => {

    const [resultado, setResultado] = useState({ cargando: true, data: null })

    useEffect(() => {
        getData(url)
    }, [url])


    const getData = async (url) => {
        try {
            setResultado({ cargando: true, data: null })
            const resp = await axios.get(url)
            setResultado({ cargando: false, data: resp.data })
        } catch (error) {
            console.log(error)
        }
    }

    return resultado
}