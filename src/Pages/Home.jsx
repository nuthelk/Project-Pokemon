import React, { useEffect, useState } from 'react'
import { useAxios } from '../Hooks/UseAxios';
import Cards from '../Components/Cards';




const Home = () => {
    const [url,setUrl]= useState("https://pokeapi.co/api/v2/pokemon/")
    const estado = useAxios(url)
    const {cargando, data} = estado
    const estado2 = useAxios('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    const {cargando: cargando2, data:data2} = estado2
    // cargando? console.log('cargando') : console.log(data.results)
   
    

    return (
        <div className='overflow-hidden'>
            <div className='border-b-2 py-2 w-screen px-4 bg-white'>
                <nav className='flex items-center gap-6'>
                    <div className='w-14 h-14'>
                        <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661293802/Proyecto_Pokemon/Pok%C3%A9_Ball_icon.svg_niwgze.png" alt="" />
                    </div>
                    <span className='text-lg font-medium'>POKEMON</span>
                    <div className='flex items-center gap-4 absolute right-12'>
                        <span className='font-medium border-r-2 px-4 cursor-pointer'>Cerrar Sesion</span>
                        <span>Nombre Completo</span>
                        <div className=''>
                            <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661298049/Proyecto_Pokemon/portada-foto-perfil-redes-sociales-consejos_qrfbdn.jpg" alt=""
                                className='rounded-full h-12 w-12 object-cover'
                            />
                        </div>
                    </div>
                </nav>

            </div>

            <div className='flex m-auto w-4/5 h-full py-16 px-28  gap-28  flex-wrap'>
                {
                    cargando || cargando2
                    ?
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    :
                    <Cards results={data.results} results2={data2.results}/>
                }
            </div>


        </div>
    )
}

export default Home