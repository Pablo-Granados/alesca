import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react'

const Subir = () => {

    const [esVisible, setEsVisible] = useState(false);

    useEffect(() => {
        // Lógica para mostrar u ocultar el botón cuando corresponda
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setEsVisible(true);
            } else {
                setEsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Opcional: agrega un desplazamiento suave
        });
    };

    return (
        <div className="boton-subir">
            <button className="boton-subir boton"
                onClick={scrollToTop}
                style={{
                    display: esVisible ? 'flex' : 'none',
                }}
            >
                <FontAwesomeIcon icon={faChevronCircleUp} style={{color: "#d3c37b", background: "#000000", borderRadius: "50%"}} />
                </button>
        </div>
    );
}

export default Subir