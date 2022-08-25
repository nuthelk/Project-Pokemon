import { Progress } from 'flowbite-react'
import React from 'react'
import { Link } from "react-router-dom";
import { useAxios } from '../Hooks/UseAxios';

const Detalles = () => {
    const idPokemon = localStorage.getItem('idPokemon')
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    const url2 = `https://pokeapi.co/api/v2/pokemon-species/${idPokemon}`
    const estado = useAxios(url)
    const { cargando, data } = estado
    const estado2 = useAxios(url2)
    const { cargando: cargando2, data: data2 } = estado2

    return (
        <>

            {
                cargando || cargando2
                    ?
                    <h1>Cargando...</h1>
                    :
                    <div className=' w-screen h-screen overflow-hidden relative' style={{"backgroundColor": "#e2e8f0"}} >
                        <div className=' absolute bg-white rounded-2xl h-[90%] w-[90%] md:w-[800px] right-0 m-auto left-0 top-0 bottom-0 overflow-y-scroll shadow-[0px_0px_27px_-4px_rgba(0,0,0,0.75)]'>
                            <div className='texto-borde text-white font-bold text-center text-2xl h-[8%] flex justify-center items-center rounded-t-2xl relative capitalize'
                                style={data2.color.name === "white" ? {"backgroundColor": "#334155"}:{"backgroundColor": data2.color.name}}
                                
                            >
                                <div className='absolute left-0 '>
                                    <Link to="/"><img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661381901/Proyecto_Pokemon/chevron-left-regular-48_ecrerd.png" alt="" className='mt-12' /></Link>
                                </div>
                                {data.name}
                            </div>

                            <div className='flex justify-center items-center h-[7%]  gap-8 relative'>
                                <p className='bg-gray-400 w-20 h-8 flex justify-center items-center text-lg font-normal text-white border-2 capitalize shadow-md'>{data.types[0].type.name}</p>
                                {
                                    data.types[1]
                                    ?
                                    <p className='bg-gray-400 w-20 h-8 flex justify-center items-center text-lg font-normal text-white border-2 capitalize shadow-md'>{data.types[1].type.name}</p> 
                                    :
                                    null
                                }
                                
                                <p className='absolute right-4 md:right-12 text-2xl'>#{idPokemon}</p>
                            </div>
                            <div className='md:flex flex flex-col md:flex-row gap-4 sm:gap-24 md:gap-24 px-12 items-center w-full md:h-[30%] pt-10 '>
                                <div className='md:h-[70%] h-[150px] '>
                                    <img src={data.sprites.other.home.front_default} alt=""
                                        className='w-full h-full  '
                                    />
                                </div>

                                {/* Stats */}

                                <div className='sm:w-[60%]'>
                                    <span className=' items-center gap-4 w-full sm:flex sm:justify-between'>
                                        <p className='text-lg '>Hp: </p>
                                        <div className="w-56 bg-gray-200 rounded-sm h-[20px] mt-1 dark:bg-gray-700">
                                            <div className="bg-green-600 h-[20px] rounded-sm dark:bg-green-500 text-white font-bold flex items-center pl-1 texto-borde"
                                                style={{ "width": data.stats[0].base_stat, "backgroundColor": data2.color.name }}>{data.stats[0].base_stat}</div>
                                        </div>
                                    </span>
                                    <span className=' items-center gap-4  sm:flex w-full sm:justify-between'>
                                        <p className='text-lg '>Attack: </p>
                                        <div className="w-56 bg-gray-200 rounded-sm h-[20px] mt-1 dark:bg-gray-700">
                                            <div className="bg-green-600 h-[20px] rounded-sm dark:bg-green-500 text-white font-bold flex items-center pl-1 texto-borde"
                                                style={{ "width": data.stats[1].base_stat, "backgroundColor": data2.color.name }}>{data.stats[1].base_stat}</div>
                                        </div>
                                    </span>
                                    <span className=' items-center gap-4  sm:flex w-full sm:justify-between'>
                                        <p className='text-lg '>Defense: </p>
                                        <div className="w-56 bg-gray-200 rounded-sm h-[20px] mt-1 dark:bg-gray-700">
                                            <div className="bg-green-600 h-[20px] rounded-sm dark:bg-green-500 text-white font-bold flex items-center pl-1 texto-borde"
                                                style={{ "width": data.stats[2].base_stat, "backgroundColor": data2.color.name }}>{data.stats[2].base_stat}</div>
                                        </div>
                                    </span>
                                    <span className=' items-center gap-4  sm:flex w-full sm:justify-between'>
                                        <p className='text-lg '>Speed: </p>
                                        <div className="w-56 bg-gray-200 rounded-sm h-[20px] mt-1 dark:bg-gray-700">
                                            <div className="bg-green-600 h-[20px] rounded-sm dark:bg-green-500 text-white font-bold flex items-center pl-1 texto-borde"
                                                style={{ "width": data.stats[5].base_stat,"backgroundColor": data2.color.name }}>{data.stats[5].base_stat}</div>
                                        </div>
                                    </span>
                                    <span className=' items-center gap-4  sm:flex w-full sm:justify-between'>
                                        <p className='text-lg '>Special Attack: </p>
                                        <div className="w-56 bg-gray-200 rounded-sm h-[20px] mt-1 dark:bg-gray-700">
                                            <div className="bg-green-600 h-[20px] rounded-sm dark:bg-green-500 text-white font-bold flex items-center pl-1 texto-borde"
                                                style={{ "width": data.stats[3].base_stat,"backgroundColor": data2.color.name }}>{data.stats[3].base_stat}</div>
                                        </div>
                                    </span>
                                    <span className=' items-center gap-4 sm:flex w-full sm:justify-between'>
                                        <p className='text-lg '>Special Defense: </p>
                                        <div className="w-56 bg-gray-200 rounded-sm h-[20px] mt-1 dark:bg-gray-700">
                                            <div className="bg-green-600 h-[20px] rounded-sm dark:bg-green-500 text-white font-bold flex items-center pl-1 texto-borde"
                                                style={{ "width": data.stats[4].base_stat,"backgroundColor": data2.color.name }}>{data.stats[4].base_stat}</div>
                                        </div>
                                    </span>
                                </div>
                            </div>

                            {/* seed */}

                            <div className='px-10 flex flex-col gap-2'>
                                <h1 className='font-semibold'>Seed Pokémon</h1>
                                <p className='lowercase'>{data2.flavor_text_entries[0].flavor_text}</p>
                            </div>

                            {/* profile */}
                            <div className='mx-8'>
                                <div className=' text-xl texto-borde font-bold text-white  mt-5 pl-3' style={data2.color.name === "white" ? {"backgroundColor": "#334155"}:{"backgroundColor": data2.color.name}}>
                                    Profile
                                </div>
                                <div className='flex justify-between px-4 pt-5   leading-8'>
                                    <div className=' w-2/4 text-center'>
                                        <p className='font-semibold'>Height : <span className='font-normal'>{data.height}m</span></p>
                                        <p className='font-semibold'>Egg Groups: : <span className='font-normal capitalize'>{data2.egg_groups[0].name}, {data2.egg_groups[1] ? data2.egg_groups[1].name : null}</span></p>
                                    </div>
                                    <div className=' w-2/4 text-center'>
                                        <p className='font-semibold'>Weight : <span className='font-normal'>{data.weight}kg</span></p>
                                        <p className='font-semibold'>Abilities: : <span className='font-normal capitalize'>{data.abilities[0].ability.name}, {data.abilities[1] ? data.abilities[1].ability.name : null}</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Evolutions */}

                            <div className='mx-8'>
                                <div className=' text-xl texto-borde font-bold text-white mt-5 pl-3' style={data2.color.name === "white" ? {"backgroundColor": "#334155"}:{"backgroundColor": data2.color.name}}>
                                    Evolutions
                                </div>

                            </div>

                        </div>

                    </div>

            }

        </>

    )
}

export default Detalles