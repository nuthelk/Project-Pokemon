import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useForm } from '../Hooks/UseForm';
import { LoginWithEmail, registerWithEmail } from '../Redux/Actions/userActions';

const makeRandomId= (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState()

    const { formValue, handleInputChangeName, reset } = useForm({
        email: "",
        password: "",
        displayName: "",
        uid: makeRandomId()
      });

    const handleLogin = () =>{
        navigate("/")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        reset();
        setInputs(null)
        dispatch(
          registerWithEmail(
            formValue.email,
            formValue.password,
            formValue.displayName,
            formValue.uid
          )
        );

      };


    return (
        <div className=' w-screen h-screen flex flex-col bg-gradient-to-b from-purple-500 to-red-500 items-center '>
            <div className='flex flex-col  w-[40%] items-center relative'>
                <div className='w-96  h-96'>
                    <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661527173/Proyecto_Pokemon/5a0596df9cf05203c4b60445_k2um45.png" alt="" />
                </div>
                <div className='w-96 z-10 absolute -bottom-10'>
                    <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661538564/Proyecto_Pokemon/International_Pok%C3%A9mon_logo.svg_hou85v.png" alt="" />
                </div>

            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-28 w-full items-center'>
                <input type="text" placeholder='User' autoComplete='off'
                    className='px-4 py-2 rounded-lg outline-none lg:w-[250px] border-2 duration-300 focus:border-blue-600 focus:lg:w-[300px] transition-all shadow-2xl' 
                        onChange={handleInputChangeName}
                        name="displayName" required value={inputs}/>
                <input type="email" placeholder='Email' autoComplete='off'
                    className='px-4 py-2 rounded-lg outline-none lg:w-[250px] border-2 duration-300 focus:border-blue-600 focus:lg:w-[300px] transition-all shadow-2xl' 
                        onChange={handleInputChangeName}
                        name="email" required value={inputs}/>

                <input type="password" placeholder='Password' autoComplete='off'
                    className='px-4 py-2 rounded-lg outline-none  lg:w-[250px] border-2 duration-300 focus:border-blue-600  focus:lg:w-[300px] transition-all shadow-2xl' 
                    onChange={handleInputChangeName}
                    name="password" required value={inputs}/>

                <button className='bg-purple-600 p-2 w-32 rounded-lg shadow-lg text-white font-medium text-lg hover:bg-red-700 transition-colors duration-500' >Register</button>
            </form>

            <div className='flex flex-col items-center gap-2 mt-2'>
                <h1 className='text-white'>Or</h1>
                <button className='bg-purple-600 p-2 w-32 rounded-lg shadow-lg text-white font-medium text-lg hover:bg-red-700 transition-colors duration-500'onClick={handleLogin} >Login</button>
            </div>

        </div>
    )
}

export default Register