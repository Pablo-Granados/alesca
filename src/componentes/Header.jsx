import React, {useState} from 'react';
import "@styles/styles.scss";

import Menu from '@componentes/Menu';

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg"
import shoppingCart from "@icons/icon_shopping_cart.svg"


const Header = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	
	return (
		<nav>
			<div className="menu">
			<img src={menu} alt="menu"  />
			</div>
			<div className="navbar-left">
				<img src={logo} alt="logo" className="logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						pablogranados22@hotmail.com
						</li>
					<li className="navbar-shopping-cart">
						<img src={shoppingCart} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
			{toggle && <Menu />}	
		</nav>
	);
}



export default Header