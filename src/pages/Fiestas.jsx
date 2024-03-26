import React, {useEffect} from 'react';
import Imagen from '../componentes/Imagen';
import vestidosFiestas from '../data/vestidosFiestas';

const Fiestas = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la página hacia arriba cuando el componente se monta
  }, []);

    return (
      <div className="inicioVestidos">
        {vestidosFiestas.map((vestidoF) => (
          <Imagen url={vestidoF.url} key={vestidoF.url} />
        ))}
  
      </div>
    )
}

export default Fiestas