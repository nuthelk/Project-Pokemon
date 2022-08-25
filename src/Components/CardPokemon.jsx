import { Spinner } from 'flowbite-react'
import React, { useState } from 'react'
import { useAxios } from '../Hooks/UseAxios'
import { Link } from "react-router-dom";

const CardPokemon = ({ url, urlEspecie }) => {
    const estado = useAxios(url)
    const estado2 = useAxios(`https://pokeapi.co/api/v2/pokemon-species/${urlEspecie}/`)
    const { cargando, data } = estado
    const {cargando: cargando2, data:data2} = estado2
  
   const handleClick = () =>{
    localStorage.setItem('idPokemon', data.id)
   }

    return (
        <div>
            {
                cargando || cargando2
                    ?
                    <Spinner aria-label="Extra large spinner example" size="xl" />
                    :
                    <Link to={`/pokemon/${data.id}`}><div className='border-2  rounded-lg w-44 h-72 hover:shadow-[0px_0px_27px_-4px_rgba(0,0,0,0.75)] transition-all duration-500 hover:scale-125 cursor-pointer' 
                        style={data2.color.name==="white" ? {"borderColor": "gray", "backgroundColor": "#f1f5f9" }:{"borderColor": data2.color.name, "backgroundColor": "#f1f5f9" }}
                        onClick={handleClick}
                        >
                        
                        <div className='rounded-lg flex justify-center items-center h-2/4 w-full overflow-hidden bg-blob bg-center bg-no-repeat bg-cover' style={{ }}>
                            <img src={data.sprites.other.home.front_default} alt="" className='h-36 w-36 object-cover' />
                        </div>
                        <div className='flex flex-col items-center mt-4 gap-2 mx-2 h-2/5 justify-center rounded-lg bg-white shadow-sm'>
                            <p className='italic font-medium rounded-md text-gray-800  px-4  capitalize'>#{data.id}{" "}{data.forms[0].name}</p>
                            <p className='italic font-medium rounded-md text-black px-4  capitalize'>{data.types[0].type.name}</p>
                            {   
                                data.types[1]
                                ?
                                <p className='italic font-medium rounded-md text-black  px-4 capitalize'>{data.types[1].type.name}</p>
                                :
                                null
                            }
                        </div>
                    </div></Link>
                    
            }
        </div>
    )
}

export default CardPokemon