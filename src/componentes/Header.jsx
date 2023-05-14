import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '@componentes/Menu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBars } from "@fortawesome/free-solid-svg-icons";
import Navbar from './Navbar';


const Header = () => {

	const [toggle, setToggle] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setToggle(false);
	}, [location]);

	const handleToggle = () => {
		setToggle(!toggle)
	}

	const [toggleNav, setToggleNav] = useState(false);
	const locationNav = useLocation();

	useEffect(() => {
		setToggleNav(false);
	}, [locationNav]);

	const handleToggleNav = () => {
		setToggleNav(!toggleNav)
	}



	return (
		<nav>
			<div className="menu" onClick={handleToggleNav}>
				<FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#15191d" }} />
				{toggleNav && <Navbar />}
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
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">
						<FontAwesomeIcon icon={faComment}>
							<a href="https://wa.me/5493416287921?text=Hola! Me gustaría agendar una cita." target="_blank" />

						</FontAwesomeIcon>
					</li>
				</ul>

			</div>

			{/* <div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						<FontAwesomeIcon icon={faUser} />
					</li>
				</ul> 
			</div>
			{toggle && <Menu />} */}
		</nav>
	);
}



export default Header