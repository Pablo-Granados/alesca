import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-component">
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"graduaciones"}>Graduaciones</Link>
                </li>
                <li>
                    <Link to={"quinces"}>Quinceañeras</Link>
                </li>
                <li>
                    <Link to={"fiestas"}>Fiestas</Link>
                </li>
                <li>
                    <Link to={"niñas"}>Niñas</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar