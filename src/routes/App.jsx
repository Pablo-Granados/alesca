import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from '../containers/Layout'
import Login from '../pages/Login'
import RecuperarPw from '../pages/RecuperarPw'
import "@styles/styles.scss";
import "../styles/global.css"
import CreateAccount from '../pages/CreateAccount'
import Home from "../pages/Home"
import MyAccount from '../pages/MyAccount'
import NewPassword from '../pages/NewPassword'
import NotFound from '../pages/NotFound'
import SendEmail from '../pages/SendEmail'
import Turnos from '../turnero/Turnos'
import Fiestas from '../pages/Fiestas'
import Graduaciones from '../pages/Graduaciones'
import Niñas from '../pages/Niñas'
import Quinces from '../pages/Quinces'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-contraseña" element={<RecuperarPw />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/graduaciones" element={<Graduaciones />} />
          <Route path="/quinces" element={<Quinces />} />
          <Route path="/fiestas" element={<Fiestas />} />
          <Route path="/niñas" element={<Niñas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Turnos />
      </Layout>
    </BrowserRouter>
  )
}

export default App
