import React from 'react';
import "../estilos/Header.scss"

const Header = () => {
    return (
        <nav>
            <div>
                <img src="./icons/icon_menu.svg" alt="menu" className="menu" />
            </div>

            <div className="navbar-left">
                <div>
                    <img src="https://simba.com.ar/wp-content/uploads/2023/02/ip7jv0rdfn6nlthnf26c.png" alt="logo" className="logo" />
                </div>
                <ul>
                    <li>
                        <a href="/">Productos</a>
                    </li>
                    <li>
                        <a href="/">Contacto</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">pablogranados22@hotmail.com</li>
                    <li className="navbar-shopping-cart">
                        <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header