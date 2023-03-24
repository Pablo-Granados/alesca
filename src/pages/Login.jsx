import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const Login = () => {

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      usename: formData.get("email"),
      password: formData.get("password")
    }
    console.log(data);
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
          <button
            onClick={handleSubmit}
            className="primary-button login-button">
            Iniciar sesión
          </button>
          <Link to="/recuperar-contraseña">Olvidé mi contraseña</Link>
        </form>
        <button
          className="secondary-button signup-button">
          Registrarme
        </button>
      </div>
    </div>
  )
}

export default Login