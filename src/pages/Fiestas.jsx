import React from 'react';
import Imagen from '../componentes/Imagen';
import vestidosFiestas from '../data/vestidosFiestas';

const Fiestas = (props) => {
    return (
      <div className="inicioVestidos">
        {vestidosFiestas.map((vestidoF) => (
          <Imagen url={vestidoF.url} key={vestidoF.url} />
        ))}
  
      </div>
    )
}

export default Fiestas