import React, { useState } from 'react'
import CardPokemon from './CardPokemon'


const Cards = ({ results }) => {
    let array = []
    results.map((e,i)=>{
        let aux = e.url.slice(34,36)
        aux = aux.replace('/', '')
        array.push(aux) 
    })

    return (
        <div className=''>
            <ul className='flex flex-wrap gap-10'>
                {
                    results.map((e, i) =>(
                        
                        <li className="" key={e.name}>
                            <CardPokemon url={e.url} urlEspecie={array[i]} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Cards