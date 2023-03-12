import React from 'react';
import "@styles/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";


const RecuperarPw = () => {
	return (
		<div className="login">
			<div className="login-container">
				<div className="logo">
					<h2><FontAwesomeIcon icon={faUnlockKeyhole} /></h2>
				</div>
				<h1 className="title">El email ha sido enviado.</h1>
				<p className="subtitle">Consulte su bandeja de entrada para obtener instrucciones sobre cómo restablecer la contraseña.
				</p>
				<div className="email-image">
					<img src="./icons/email.svg" alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default RecuperarPw;