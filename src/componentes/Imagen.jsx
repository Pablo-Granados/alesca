import React from 'react'

const Imagen = (props) => {
  return (
    <div className="vestidos">

        <img src={props.url} alt={props.alt} />
    </div>
  )
}

export default Imagen