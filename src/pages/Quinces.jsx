import React from 'react';
import vestidosXV from '../data/vestidosXV';
import Imagen from '../componentes/Imagen';

const Quinces = () => {
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