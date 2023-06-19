/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Slider from "react-slick";
function NextArrow({ onClick }) {
	return <button className="slide-arrow fugu--arrow" onClick={onClick}></button>;
}

function PrevArrow({ onClick }) {
	return <button className="slide-arrow prev-arrow" onClick={onClick}></button>;
}

export default function CardSliderOne() {
	const settings = {
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		autoplay: false,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	};
	return (
		<div className="fugu--slider-section" id="beneficios-clientes">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-sm">
						<h2> Beneficios del pase “The Barber” para clientes.</h2>
						<p>
							Este pase está enfocado en las personas que van a cuidar
							su imagen personal, recibe un trato exclusivo y una serie de
							ventajas VIP. 
						</p>
						<p>
							<strong>
								Desliza las tarjetas para ver todos los beneficios ➡️
							</strong>
						</p>
					</div>
				</div>
				<div className="fugu--slider-one">
					<Slider {...settings}>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/Imagen9.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Cortes, tintes y rituales de barba gratuitos.</h3>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X1.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Descuentos Especiales en todos los Servicios.</h3>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/x2.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Promociones y Descuentos en productos y empresas colaboradoras.</h3>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X3.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Sorteos exclusivos de cortes. tintes, productos, merchandising.</h3>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/Imagen11.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Trato exclusivo en el establecimiento.</h3>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/Imagen1.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Solo cortes con Antonio.</h3>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/Imagen13.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Reservar con antelación en ocasiones especiales.</h3>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/Imagen2.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3> Asesoramiento y creación de proyectos de corte.</h3>
							</div>
						</div>
					</Slider>
				</div>
				{/* <div className="fugu--section-title"> */}
					<div className="fugu--default-content content-sm bottom-disclaimer">
						<p>
							<strong>
								Desliza las tarjetas para ver todos los beneficios ➡️
							</strong>
						</p>
					</div>
				{/* </div> */}
			</div>
			{/* <div className="fugu--shape1">
				<img src="/images/shape2/shape1.png" alt="" />
			</div> */}
		</div>
	);
}
