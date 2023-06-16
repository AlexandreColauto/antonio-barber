/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";

export default function HeroSection() {
	return (
		<div className="fugu--hero-section">
			<div id="fugu--counter"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="fugu--hero-content">
							<h1 className="wow fadeInUpX" data-wow-delay="0s">
								“Descubre la nueva experiencia de cortarse el cabello”
							</h1>
							<p className="wow fadeInUpX" data-wow-delay="0.10s">
								Cortes y tintes gratuitos, descuentos y sorteos en productos y marcas asociadas,
								reservar de manera exclusiva , asesoramiento gratuito en proyectos de corte,
								rituales de barba a coste 0 y mucho más!
							</p>
							<div className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX" data-wow-delay="0.20s">
								<Link href={"#conoce"} legacyBehavior>
									<a className="fugu--btn bg-gray active">Conoce a Antonio</a>
								</Link>
								<Link href={"#beneficios-alumnos"} legacyBehavior>
									<a className="fugu--btn bg-gray">Beneficios del pase</a>
								</Link>
							</div>
							<div className="fugu--counter-wrap wow fadeInUpX" data-wow-delay="0.30s">
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="45" className="fugu--counter">
											<CountUp end={18} />
										</span>
										<strong>K</strong>
									</h2>
									<p>Clientes</p>
								</div>
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="86" className="fugu--counter">
											<CountUp end={6} />
										</span>
										<strong>Y</strong>
									</h2>
									<p>Experiencia</p>
								</div>
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="32" className="fugu--counter">
											<CountUp end={5} />
										</span>
										<strong>⭐️</strong>
									</h2>
									<p>Google y Booksy</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="fugu--hero-right" id="rotateOne">
							<div className="fugu--card-wrap">
								<div className="fugu--card-thumb">
									<img src="/images/logo/logo.jpg" alt="" />
								</div>
								<div className="fugu--card-data">
									<h3>Compra tu pase “The Barber” </h3>
									<p>Y empieza a disfrutar de sus múltiples beneficios.</p>
									<div className="fugu--card-footer">
										{/* <div className="fugu--card-footer-data">
											<span>Mint Price:</span>
											<h4>0.194 ETH</h4>
										</div> */}
										<Link href={"#"} legacyBehavior>
											<a className="fugu--btn btn-sm bg-white">Comprar</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="fugu--hero-shape1">
					<img src="/images/all-img/v3/shape-hero1.png" alt="" />
				</div>
				<div className="fugu--hero-shape2"></div> */}
			</div>
		</div>
	);
}
