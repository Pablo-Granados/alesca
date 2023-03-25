import React from 'react';


const Footer = () => {
    return (
        <div className='pie'>
            <div className="ubicacion">
                <p>Italia 772, Rosario, Santa Fe</p>
            </div>

            <div className="redes">
                <a href="https://www.instagram.com/alescaaltacostura/?hl=es" target="_blank">
                    <img src="https://i.postimg.cc/Njjv2w5c/icons8-instagram-48.png" alt="Icono de instagram"/>
                </a>
                <a href="https://wa.me/5493416287921?text=Hola! Me gustaría agendar una cita." target="_blank">
                    <img src="https://i.postimg.cc/HnNX0mdh/icons8-whatsapp-48.png" alt="Icono de whats app" />
                </a>
            </div>
            <div className="copy">
                <p>© Todos los derechos reservados.</p>
                <p className='correo'>pablogranados22@hotmail.com</p>
            </div>

        </div>
    )
}

export default Footer