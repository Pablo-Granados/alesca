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
				<div className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet. Nostrum accusamus sit illum iste temporibus quibusdam ipsum, qui natus recusandae unde architecto porro accusantium ipsa! Praesentium, ad. Recusandae, quae?</div>
				<div className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet. Nostrum accusamus sit illum iste temporibus quibusdam ipsum, qui natus recusandae unde architecto porro accusantium ipsa! Praesentium, ad. Recusandae, quae?</div>
				<div className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet. Nostrum accusamus sit illum iste temporibus quibusdam ipsum, qui natus recusandae unde architecto porro accusantium ipsa! Praesentium, ad. Recusandae, quae?</div>
				<div className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet. Nostrum accusamus sit illum iste temporibus quibusdam ipsum, qui natus recusandae unde architecto porro accusantium ipsa! Praesentium, ad. Recusandae, quae?</div>
				<div className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet. Nostrum accusamus sit illum iste temporibus quibusdam ipsum, qui natus recusandae unde architecto porro accusantium ipsa! Praesentium, ad. Recusandae, quae?</div>
			</div>
		</div>
	);
}

export default Home;