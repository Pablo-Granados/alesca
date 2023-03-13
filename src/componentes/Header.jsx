import React, {useState} from 'react';
import "@styles/styles.scss";

import Menu from '@componentes/Menu';

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
				<Link to="/">
				<img src={logo} alt="logo" className="logo" />
				</Link>
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