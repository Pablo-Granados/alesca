import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import RecuperarPw from '../containers/RecuperarPw'
import "../estilos/global.css"
import Home from "../pages/Home"
import NotFound from '../pages/NotFound'
import Turnos from '../turnero/Turnos'




const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-contraseña" element={<RecuperarPw />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Turnos />
      </Layout>
    </BrowserRouter>
  )
}

export default App
