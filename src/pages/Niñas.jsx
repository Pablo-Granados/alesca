import React from 'react';
import vestidosNenas from '../data/vestidosN';
import Imagen from '../componentes/Imagen';

const Niñas = (props) => {
  return (
    <div className="inicioVestidos">
      {vestidosNenas.map((vestido) => (
        <Imagen url={vestido.url} key={vestido.url} />
      ))}

    </div>  )
}

export default Niñas