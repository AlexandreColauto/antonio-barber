/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function FooterHomeThree() {
	return (
		<footer className="fugu--footer-section">
			<div className="container">
				<div className="fugu--footer-top">
					<div className="row">
						<div className="col-lg-3">
							<div className="fugu--textarea">
								{/* <div className="fugu--footer-logo">
									<img src="/images/logo/logo-white.svg" alt="" className="light-version-logo" />
								</div>
								<p>
									Discover NFTs by category, track the latest drops, and follow the collections you
									love to enjoy it!!!
								</p> */}
								<div className="fugu--social-icon">
									<ul>
										<li>
											<Link href={"https://www.instagram.com/antoniothebarber94/"}>
												<FontAwesomeIcon icon={faInstagram} />
											</Link>
										</li>
										<li>
											<Link href={"https://api.whatsapp.com/send?phone=34691482161&text=Hola%20Antonio,%20me%20gustria%20saber%20m%C3%A1s%20sobre%20el%20pase%20digital%20de%20tu%20barberia."}>
												<FontAwesomeIcon icon={faWhatsapp} />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<ul>
									<li>
										<Link href={"#beneficios-clientes"}>
											Beneficios clientes
										</Link>
									</li>
									<li>
										<Link href={"#beneficios-alumnos"}>
											Beneficios alumnos
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<ul>
									<li>
										<Link href={"#partners"}>
											Partners
										</Link>
									</li>
									<li>
										<Link href={"#roadmap"}>
											Roadmap
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<ul>
									<li>
										<Link href={"#preguntas"}>
											Preguntas frequentes
										</Link>
									</li>
									<li>
										<Link href={"#mapa"}>
												Ubicacion
											</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu--footer-bottom">
					{/* assets <p>&copy; Copyright 2022, All Rights Reserved by Mthemeus</p>
					<div className="fugu--footer-menu">
						<ul>
							<li>
								<Link href="#">Terms </Link>
							</li>
							<li>
								<Link href="#"> Privacy Policy </Link>
							</li>
						</ul>
					</div> */}
				</div>
			</div>
		</footer>
	);
}
