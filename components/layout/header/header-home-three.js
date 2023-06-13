/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import {
	BlogDropdownMenus,
	ContactDropdownMenus,
	DemoDropdownMenus,
	ElementsMegaMenu,
	PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faW } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function HeaderHomeThree() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const scroll = useScroll();
	return (
		<header
			className={`site-header site-header--menu-right fugu--header-section fugu--header-three ${
				scroll ? "sticky-menu" : ""
			}`}
			id="sticky-menu"
		>
			<div className="container-fluid">
				<nav className="navbar site-navbar">
					<div className="brand-logo">
						<Link href={"/"}>
							<img src="/images/logo/logo.jpg" alt="" className="light-version-logo" />
						</Link>
					</div>
					
					<div className="menu-block-wrapper">
						<div
							className={`menu-overlay ${isMobileMenuOpen ? "active" : null}`}
							onClick={handleCloseMobileMenu}
						></div>
						<nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
							<div className="mobile-menu-head">
								<div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
									&times;
								</div>
							</div>

							<Navbar>
								<NavItem navItemText="Reservar cita" link="https://booksy.com/es-es/34193_antonio-the-barber_barberia_29847_benacazon"/>
							</Navbar>
						</nav>
					</div>

					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
						<a className="fugu--btn fugu--menu-btn1" href="#">
							Comprar pase
						</a>
					</div>

					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
						<a className="social-icon" href="mailto:“antoniolabrinth@gmail.com”">
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</div>

					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
						<a className="social-icon" href="https://api.whatsapp.com/send?phone=34691482161&text=Hola%20Antonio,%20me%20gustria%20saber%20m%C3%A1s%20sobre%20el%20pase%20digital%20de%20tu%20barberia.">
							<FontAwesomeIcon icon={faWhatsapp} />
						</a>
					</div>

					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
						<a className="social-icon" href="https://www.instagram.com/antoniothebarber94/">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div>

					<div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<span></span>
					</div>

				</nav>
			</div>
		</header>
	);
}
