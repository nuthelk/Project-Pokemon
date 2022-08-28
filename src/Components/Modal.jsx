import { getAuth } from 'firebase/auth';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { Context } from '../context/ContextProvider';
import { db } from '../Firebase/firebaseConfig';
import { loginProvider } from '../Redux/Actions/userActions';

const Modal = ({name}) => {
    const dataReduxUser = useSelector((state) => state.login);
    const [nombre, setNombre] = useState('')
    const dispatch = useDispatch()
    const {showModal, handleModal} = useContext(Context)
    const auth = getAuth()

    const handleChange = (e) =>{
        setNombre(e)
    }

    const objeto = {
        displayName: nombre,
        email: dataReduxUser.email,
        photoURL: dataReduxUser?.photoURL,
        uid: dataReduxUser.uid
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        dispatch(loginProvider(objeto.displayName, objeto.email, objeto.photoURL, objeto.uid))
        const updateName = doc(db, "users", dataReduxUser.uid)
        await updateDoc(updateName, {displayName: nombre} )
        Swal.fire(
            'Good job!',
            'Tu nombre ha sido editado',
            'success'
          )
        handleModal()
    }

    const handleEliminar = () =>{
        deleteDoc(doc(db, "users", dataReduxUser.uid))
        Swal.fire(
            'Good job!',
            'Tu cuenta se ha eliminado',
            'success'
          )
        auth.signOut()
    }

  return (
    <div className='bg-white w-56 h-96 z-10 absolute right-5 rounded-xl border-2 border-blue-100 shadow-lg flex flex-col items-center'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center pt-10 gap-2'>
            <label htmlFor="">Edita tu nombre</label>
            <input type="text" placeholder={name} required className='border-2 rounded-lg pl-4 py-1 border-cyan-600 outline-none' 
                onChange={(e)=>handleChange(e.target.value)}/>
            <button className='bg-cyan-600 p-2 w-32 rounded-lg shadow-lg text-white font-medium text-lg hover:bg-yellow-500 transition-colors duration-500 mt-4' >Editar</button>
        </form>
        <label className='mt-8'>¿Quieres Eliminar tu cuenta?</label>
        <button className='bg-cyan-600 p-2 w-32 rounded-lg shadow-lg text-white font-medium text-lg hover:bg-red-700 transition-colors duration-500 mt-4 '
        onClick={handleEliminar} >Eliminar</button>
    </div>
  )
}

export default Modal