import React from 'react';
import vestidosG from '../data/vestidosG';
import Imagen from '../componentes/Imagen';

const Graduaciones = (props) => {
  return (
    <div className="inicioVestidos">
      {vestidosG.map((vestido) => (
        <Imagen url={vestido.url} key={vestido.url} />
      ))}

    </div>
  )
}

export default Graduaciones