/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";
import ConpayButton from "conpay-button";

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
                                Obtén múltiples beneficios exclusivos tanto si eres cliente de Antonio como si quieres
                                formarte con él para aprender su estilo de corte, simplemente compra el Pase Vip “The Barber”
                                y empieza a disfrutar de todas las ventajas.
                            </p>
                            <div className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX" data-wow-delay="0.20s">
                                <Link href={"#conoce"} legacyBehavior>
                                    <a className="fugu--btn bg-gray active">Conoce a Antonio</a>
                                </Link>
                                <Link href={"#beneficios-clientes"} legacyBehavior>
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
                                    <img src="/images/GIF.gif" alt="" />
                                </div>
                                <div className="fugu--card-data">
                                    <h3>Compra tu pase “The Barber” </h3>
                                    <p>Y empieza a disfrutar de sus múltiples beneficios.</p>
                                    <div className="fugu--card-footer">
                                        {/* <div className="fugu--card-footer-data">
											<span>Mint Price:</span>
											<h4>0.194 ETH</h4>
										</div> */}
                                        <ConpayButton
                                            productAddress="0xfc96dfC4D196953a7018c570A00d150eeDa5be01"
                                            customUrl="barber-popup"
                                            text="Comprar pase"
                                        />
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
