import React, { useEffect } from 'react';
import vestidosG from '../data/vestidosG';
import Imagen from '../componentes/Imagen';

const Graduaciones = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la página hacia arriba cuando el componente se monta
  }, []);
  
  return (
    <div className="inicioVestidos">
      {vestidosG.map((vestido) => (
        <Imagen url={vestido.url} key={vestido.url} />
      ))}

    </div>
  )
}

export default Graduaciones