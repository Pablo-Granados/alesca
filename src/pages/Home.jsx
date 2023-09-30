import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalScroll from '../componentes/HorizontalScroll';
import Slider from '../componentes/Slider';

const Home = () => {

	return (
		<div className="inicio">
			<Slider />
			<div className='titulo-home'>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat enim praesentium soluta cumque nam sint porro sunt ab nihil unde repellat dolore odio voluptatem voluptatum impedit accusamus, architecto repudiandae. Tempore.</p>

			</div>
			<HorizontalScroll />
			<div className="subtitulo-home">
				<p>¿Cuál es tu próximo evento?</p>
			</div>
			<div className="contenedor-secciones-home">
				<Link to={"graduaciones"}>
					<div className="animate__animated animate__fadeInUp home graduaciones">
						<p className="quinceañeras-home-portada"> GRADUACIONES</p>
					</div>
				</Link>
				<Link to={"quinces"}>
					<div className="animate__animated animate__fadeInUp home quinces">
						<p className="quinceañeras-home-portada"> QUINCEAÑERAS</p>
					</div>
				</Link>
				<Link to={"fiestas"}>
					<div className="animate__animated animate__fadeInUp home fiestas">
						<p className="fiestas-home-portada"> FIESTAS</p>

					</div>
				</Link>
				<Link to={"niñas"}>
				<div className="animate__animated animate__fadeInUp home niñas">
					<p className="niñas-home-portada"> NIÑAS</p>

				</div>
				</Link>

			</div>
		</div>
	);
}

export default Home;