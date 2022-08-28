import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../Hooks/UseForm';
import { useDispatch, useSelector } from "react-redux";
import { loginFacebook, loginGoogle, LoginWithEmail } from '../Redux/Actions/userActions';
import { db } from '../Firebase/firebaseConfig';
import { collection, doc, getDocs } from 'firebase/firestore';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { formValue, handleInputChangeName, reset } = useForm({
        email: "",
        password: "",
    });


    const handleSubmit = async(e) => {
        e.preventDefault()
        dispatch(LoginWithEmail(formValue.email, formValue.password));
        reset();
        
    }

    const handleGoogle = () => {
        dispatch(loginGoogle());
    };

    const handleFacebook =  () =>{
        dispatch(loginFacebook())
    }

    const handleRegistro = () => {
        navigate("/register")
    }

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
            <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4 mt-28 w-full items-center'>
                <input type="Email" placeholder='Email' autoComplete='off'
                    className='px-4 py-2 rounded-lg outline-none lg:w-[250px] border-2 duration-300 focus:border-blue-600 focus:lg:w-[300px] transition-all shadow-2xl
                        focus:' required
                    onChange={handleInputChangeName}
                    name="email" />
                <input type="password" placeholder='Password' autoComplete='off'
                    className='px-4 py-2 rounded-lg outline-none  lg:w-[250px] border-2 duration-300 focus:border-blue-600  focus:lg:w-[300px] transition-all shadow-2xl
                        ' required
                    onChange={handleInputChangeName}
                    name="password" />

                <button className='bg-purple-600 p-2 w-32 rounded-lg shadow-lg text-white font-medium text-lg hover:bg-red-700 transition-colors duration-500' >Login</button>
            </form>

            <div className='flex items-center justify-center mt-12'>
                <div className='border-r-2 px-2'>
                    <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661526807/Proyecto_Pokemon/icons8-logo-de-google-50_g3xc8r.png" alt=""
                        className='cursor-pointer' onClick={handleGoogle}/>
                </div>
                <div className='pl-2'>
                    <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661526807/Proyecto_Pokemon/icons8-facebook-nuevo-50_yym8ly.png" alt=""
                        className='cursor-pointer' onClick={handleFacebook}/>
                </div>
            </div>
            <div className='mt-4'>
                <p>Don't have an account?<span className='cursor-pointer text-purple-600 font-semibold' onClick={handleRegistro}> Create Account</span></p>
            </div>
        </div>
    )
}

export default Login