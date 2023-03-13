import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from '../containers/Layout'
import Login from '../pages/Login'
import RecuperarPw from '../pages/RecuperarPw'
import "../styles/global.css"
import Checkout from '../pages/Checkout'
import CreateAccount from '../pages/CreateAccount'
import Home from "../pages/Home"
import MyAccount from '../pages/MyAccount'
import NewPassword from '../pages/NewPassword'
import NotFound from '../pages/NotFound'
import Orders from '../pages/Orders'
import SendEmail from '../pages/SendEmail'
import Turnos from '../turnero/Turnos'
import AppContext from '../context/AppContext'





const App = () => {
  return (
    <AppContext.Provider value={""}>
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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Turnos />
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
