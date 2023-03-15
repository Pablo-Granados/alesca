import React, {useState} from 'react';
import "@styles/styles.scss";

import Menu from '@componentes/Menu';

import menu from "@icons/icon_menu.svg";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


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
				<Link to="/"
				src={"https://i.postimg.cc/TwFgXLGG/descarga-1.jpg"} 
				alt="logo" 
				width="200px" 
				height="65px" 
				className="logo" />
				<ul>
					<li>
						<Link href="/">Inicio</Link>
					</li>
					<li>
						<a href="/">Graduaciones</a>
					</li>
					<li>
						<a href="/">Quinceañeras</a>
					</li>
					<li>
						<a href="/">Fiestas</a>
					</li>
					<li>
						<a href="/">Niñas</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
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