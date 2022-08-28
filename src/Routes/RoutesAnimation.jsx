import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Detalles from '../Pages/Detalles'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { PublicRouter } from './PublicRouter'
import {PrivateRouter} from './PrivateRouter'

const RoutesAnimation = () => {
    const location = useLocation()
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const auth2 = getAuth();
        onAuthStateChanged(auth2, (user) => {
            if (user?.uid) {
                // console.log(user);
                // Posibilidad de recuperar la info luego de que se recargue la web
                setAuth(true);
            } else {
                setAuth(false);
            }
        });
    }, [auth]);


    return (
        <AnimatePresence mode={'wait'} initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<PublicRouter isAutentication={auth}><Login /></PublicRouter>} />
                <Route exact path="/register" element={<PublicRouter isAutentication={auth}><Register /></PublicRouter>} />
                <Route exact path="/home" element={<PrivateRouter isAutentication={auth}><Home /></PrivateRouter>} />
                <Route exact path="/pokemon/:id" element={<PrivateRouter isAutentication={auth}><Detalles /></PrivateRouter>} />
            </Routes>
        </AnimatePresence>
    )
}

export default RoutesAnimation