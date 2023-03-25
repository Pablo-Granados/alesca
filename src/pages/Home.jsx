import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../componentes/Slider';

const Home = () => {
	
	return (
		<div className="inicio">
			<Slider />
			<div className="contenedor-secciones-home">
				<Link to={"graduaciones"}>
					<div className="animate__animated animate__fadeInUp quinceañeras-home graduaciones">
						<p className="quinceañeras-home-portada"> GRADUACIONES</p>
					</div>
				</Link>
				<Link to={"quinces"}>
					<div className="animate__animated animate__fadeInUp quinceañeras-home quinces">
						<p className="quinceañeras-home-portada"> QUINCEAÑERAS</p>
					</div>
				</Link>
				<div className="animate__animated animate__fadeInUp">FIESTAS</div>
				<div className="animate__animated animate__fadeInUp">NIÑAS</div>

			</div>
		</div>
	);
}

export default Home;