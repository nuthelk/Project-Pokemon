import React from 'react'
import CardPokemon from './CardPokemon'

const Cards = ({results, results2}) => {

    const pokemones2 = results2.slice(0,5)
    
    
  return (
    <div className=''>
        <ul className='flex flex-wrap gap-10'>
            {
                results.map((e,i) => (
                    <li className=""  key={e.name}>
                        <CardPokemon url={e.url} urlEspecie={i+1}/>
                    </li>

                ))
                
            }
            {
                pokemones2.map((e,i) => (
                    <li className=""  key={e.name}>
                        <CardPokemon url={e.url} urlEspecie={i+1}/>
                    </li>

                ))
            }
        </ul>
    </div>
  )
}

export default Cards