import React, { useContext, useEffect, useState } from 'react'
import { useAxios } from '../Hooks/UseAxios';
import Cards from '../Components/Cards';
import { motion } from "framer-motion";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../Firebase/firebaseConfig';
import Modal from '../Components/Modal';
import { Context } from '../context/ContextProvider';


const Home = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const auth = getAuth();
    const estado = useAxios(url)
    const { cargando, data } = estado
    const estado2 = useAxios('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    const { cargando: cargando2, data: data2 } = estado2
    const [search, setSearch] = useState('')
    const [dataSearch, setDataSearch] = useState(data?.results)
    const dataReduxUser = useSelector((state) => state.login);
    const {showModal, handleModal} = useContext(Context)
    


    const handleSearch = (e) => {
        setSearch(e)
        filtrar(e)

    }

    const filtrar = (busqueda) => {
        let aux = data2.results.slice(0, 5)
        let resultadoBusqueda = data.results.filter((e) => {
            if (e.name.includes(busqueda.toLowerCase())) {
                return e
            }
        })
        let resultadoBusqueda2 = aux.filter((e) => {
            if (e.name.includes(busqueda.toLowerCase())) {
                return e
            }
        })
        setDataSearch(resultadoBusqueda.concat(resultadoBusqueda2))

    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: -2000, transition: { duration: 0.3 } }} className='overflow-hidden'>
            <div className='border-b-2 py-2 w-screen px-4  bg-gradient-to-b from-cyan-500 to-blue-500'>
                <nav className='flex items-center gap-6 text-white'>
                    <div className='w-14 h-14'>
                        <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661293802/Proyecto_Pokemon/Pok%C3%A9_Ball_icon.svg_niwgze.png" alt="" />
                    </div>
                    <span className='text-lg font-medium'>POKEMON</span>
                    <div className='flex items-center gap-4 absolute right-12'>
                        <span className='font-medium border-r-2 px-4 cursor-pointer'
                            onClick={() => { auth.signOut(); }}>Cerrar Sesion</span>
                        <span className='capitalize'>{dataReduxUser.displayName}</span>
                        <div className=''>
                            {
                                dataReduxUser.photoURL
                                    ?
                                    <img src={dataReduxUser.photoURL} alt="" className='rounded-full h-12 w-12 object-cover cursor-pointer hover:opacity-50'
                                        onClick={handleModal} />
                                    :
                                    <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661298049/Proyecto_Pokemon/portada-foto-perfil-redes-sociales-consejos_qrfbdn.jpg" alt=""
                                        className='rounded-full h-12 w-12 object-cover cursor-pointer'
                                        onClick={handleModal}
                                    />
                            }
                            
                        </div>
                    </div>
                </nav>
                    {showModal && <Modal name={dataReduxUser.displayName}/>}
            </div>

            {/* searchbar */}

            <div className='mt-14  flex justify-center'>
                <Input type="search" autoComplete='off' name="search" className='w-96' value={search} onChange={(e) => handleSearch(e.target.value)} placeholder='Search Pokemon...' />

            </div>

            <div className='flex m-auto w-4/5 h-full py-16 px-28  gap-28  flex-wrap'>
                {
                    cargando || cargando2
                        ?
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                        :

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
                            <Cards results={dataSearch ? dataSearch : data.results.concat(data2.results.slice(0, 5))} />
                        </motion.div>

                }
            </div>


        </motion.div>
    )
}

export default Home