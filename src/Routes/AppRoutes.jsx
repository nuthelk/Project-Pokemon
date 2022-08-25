import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detalles from '../Pages/Detalles'
import Home from '../Pages/Home'

const AppRoutes = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokemon/:id" element={<Detalles />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes