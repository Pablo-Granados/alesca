import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "@styles/styles.scss";

import Menu from '@componentes/Menu';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
	const [toggle, setToggle] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setToggle(false);
	}, [location]);

	const handleToggle = () => {
		setToggle(!toggle)
	}


	return (
		<nav>
			<div className="menu">
				<FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#15191d" }} />
			</div>
			<div className="navbar-left">
				<Link to="/"
					alt="logo"
					className="logo"
				>
					<img src="https://i.postimg.cc/TwFgXLGG/descarga-1.webp" width="200px"
						height="65px" alt="" />
				</Link>
				<ul>
					<li>
						<Link to={"/"}>Inicio</Link>
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