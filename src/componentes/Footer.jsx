import React from 'react';


const Footer = () => {
    return (
        <div className='pie'>
            <div className="ubicacion">
                <h2>Encontranos en</h2>
                <p>Italia 772, Rosario, Santa Fe</p>
                <h2>Mandanos un correo a</h2>
                <p>alesca.altacostura@gmail.com</p>
            </div>

            <div className="redes">
                <h2>Escribinos a nuestras redes sociales</h2>
                <a href="https://www.instagram.com/alescaaltacostura/?hl=es" target="_blank">
                    <img src="https://i.postimg.cc/dtkZ51sv/icons8-instagram-50.png" alt="Icono de instagram" />
                </a>
                <a href="https://wa.me/5493416746772?text=Hola! Me gustaría agendar una cita." target="_blank">
                    <img src="https://i.postimg.cc/xTDNFQcz/icons8-whatsapp-50.png" alt="Icono de whats app" />
                </a>
            </div>
            <div className="copy">
                    <a href="https://www.linkedin.com/in/pablongranados/" target="_blank">
                        <p>© Desarrollado por Pablo Granados.</p>
                    </a>
            </div>

        </div>
    )
}

export default Footer