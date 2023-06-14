/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function FilterGalarryOne() {
	const isotope = useRef();
	const [activeClass, setActiveClass] = useState("*");
	const [filterKey, setFilterKey] = useState("*");
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope("#fugu--four-column", {
				itemSelector: ".collection-grid-item",

				resizable: false,
				masonry: {
					columnWidth: ".collection-grid-item",
					gutterWidth: 0,
				},
			});
		}, 1000);
		return () => isotope.current.destroy();
	}, []);

	useEffect(() => {
		if (isotope.current)
			filterKey === "*"
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
	}, [filterKey]);

	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
		setActiveClass(key);
	};

	const handleActiveClass = (key) => {
		if (key === activeClass) return "active";
	};
	return (
		<div className="fugu--portfolio-section fugu--section-padding" id="beneficios-alumnos">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-sm">
						<h2>Beneficios del pase “The Barber” para alumnos.</h2>
						<p>
							Este pase está enfocado en las personas que quieren aprender a cortar el cabello con uno de los peluqueros más reconocidos de Andalucía.
						</p>
					</div>
				</div>
				<div className="fugu--portfolio-wrap" id="fugu--four-column">
					<div className="collection-grid-item sports domain">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X4.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Academia online con contenido</h3>
								<p>categorizado y actualizaciones continuas</p>
							</div>
						</div>
					</div>
					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X11.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Asistencia en formaciones</h3>
								<p>impartidas por Antonio</p>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X14.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Invitados exclusivos</h3>
								<p>en formaciones online y presenciales.</p>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X7.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Sorteos y regalos especiales</h3>
								<p>de material de barbero, productos y merchandising.</p>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/x8.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Concursos y retos</h3>
								<p>con premios para los ganadores.</p>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X9.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Certificaciones</h3>
								<p>Antonio The Barber</p>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X13.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Documentación y lecciones</h3>
								<p>teóricas actualizadas.</p>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X15.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Formaciones privadas y sorteos</h3>
								<p>para asistir a cortes con famosos.</p>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X15.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Formaciones privadas y sorteos</h3>
								<p>para asistir a cortes con famosos.</p>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X9.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Ser acompañante de Antonio</h3>
								<p>en los eventos a los que asista</p>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X10.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Pertenecer a una comunidad privada</h3>
								<p>donde hacer networking</p>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/X12.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Obtener mayor visibilidad</h3>
								<p>en RRSS gracias a promociones de Antonio</p>
							</div>
						</div>
					</div>
				</div>
				
				<div className="fugu--portfolio-btn">
					<Link href={"#"} legacyBehavior>
						<a className="fugu--outline-btn">
							<span>View All NFTs</span>
						</a>
					</Link>
				</div>
			</div>
			<div className="fugu--shape2">
				<img src="/images/shape2/shape2.png" alt="" />
			</div>
		</div>
	);
}
