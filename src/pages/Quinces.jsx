import React, {useEffect} from 'react';
import vestidosXV from '../data/vestidosXV';
import Imagen from '../componentes/Imagen';

const Quinces = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la página hacia arriba cuando el componente se monta
  }, []);

  return (
    <div className="inicioVestidos">
      {vestidosXV.map((vestidoXV) => (
        <Imagen 
        url={vestidoXV.url} 
        key={vestidoXV.url}
        alt={vestidoXV.alt} />
      ))}

    </div>
  )
}

export default Quinces