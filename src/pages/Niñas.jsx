import React, {useEffect} from 'react';
import vestidosNenas from '../data/vestidosN';
import Imagen from '../componentes/Imagen';

const Niñas = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la página hacia arriba cuando el componente se monta
  }, []);

  return (
    <div className="inicioVestidos">
      {vestidosNenas.map((vestido) => (
        <Imagen url={vestido.url} key={vestido.url} />
      ))}

    </div>  )
}

export default Niñas