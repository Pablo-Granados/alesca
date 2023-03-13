import React from 'react';
import "@styles/styles.scss";
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<Link to="/login" >Mi cuenta</Link>
				</li>
				<li>
					<Link to="/">Cerrar sesión</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;