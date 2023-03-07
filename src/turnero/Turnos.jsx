import React from 'react';
import { PopupWidget } from "react-calendly";


const Turnos = () => {
  return (
    <div className="Turnos">
      <PopupWidget
        url="https://calendly.com/pablogranados22/60min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Agenda una cita!"
        textColor="#f5f5f5"
        color="#212529"
      />
    </div>  )
}

export default Turnos