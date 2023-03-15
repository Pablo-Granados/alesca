import React, {useState} from 'react';
import "@styles/styles.scss";

import Menu from '@componentes/Menu';

import menu from "@icons/icon_menu.svg";
import ShoppingCartItem from './ShoppingCartItem';
import { Link } from 'react-router-dom';



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
				<img 
				src={"https://i.postimg.cc/TwFgXLGG/descarga-1.jpg"} 
				alt="logo" 
				width="200px" 
				height="65px" 
				className="logo" />
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
					{/* <li className="navbar-email" onClick={handleToggle}>
						pablogranados22@hotmail.com
						</li> */}
					<li className="navbar-email" onClick={handleToggle}>
					<FontAwesomeIcon icon={faUser} />
					</li>
				</ul>
			</div>
			{toggle && <Menu />}	
		</nav>
	);
}



export default Header