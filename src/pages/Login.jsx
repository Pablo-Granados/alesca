import React, { useRef } from 'react';
import "@styles/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const Login = () => {

  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      usename: formData.get("email"),
      password: formData.get("password")
    }
  }


  return (
    <div className="login">
      <div className="login-container">
        <div className="logo">
          <h2><FontAwesomeIcon icon={faUser} /></h2>
        </div>
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">Email</label>
          <input type="text" name="email" placeholder="aaaaaaaaa@aaaa.com.ar" className="input input-email" />
          <label htmlFor="new-password" className="label">Contraseña</label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />
          <input type="submit" value="Iniciar sesión" className="primary-button login-button" />
          <a href="/">Olvidé mi contraseña</a>
        </form>
        <button
          className="secondary-button signup-button"
          onClick={handleSubmit}>
          Registrarme
        </button>
      </div>
    </div>
  )
}

export default Login