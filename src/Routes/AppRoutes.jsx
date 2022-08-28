import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import RoutesAnimation from './RoutesAnimation'

const AppRoutes = () => {
  

  return (
    <BrowserRouter>
      <RoutesAnimation />
    </BrowserRouter>

  )
}

export default AppRoutes