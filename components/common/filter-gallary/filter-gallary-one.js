/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import ConpayButton from "conpay-button";
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
                        <h2>Pase "The Barber" para Alumnos</h2>
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
                                <h3>Academia online con contenido categorizado y actualizaciones continuas.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="collection-grid-item video marketing">
                        <div className="fugu--card-wrap">
                            <div className="fugu--card-thumb">
                                <img src="/images/beneficios/X11.jpg" alt="" />
                            </div>
                            <div className="fugu--card-data">
                                <h3>Asistencia en formaciones impartidas por Antonio.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="collection-grid-item video marketing">
                        <div className="fugu--card-wrap">
                            <div className="fugu--card-thumb">
                                <img src="/images/beneficios/X14.jpg" alt="" />
                            </div>
                            <div className="fugu--card-data">
                                <h3>Invitados exclusivos en formaciones online y presenciales.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="collection-grid-item video marketing">
                        <div className="fugu--card-wrap">
                            <div className="fugu--card-thumb">
                                <img src="/images/beneficios/X7.jpg" alt="" />
                            </div>
                            <div className="fugu--card-data">
                                <h3>Sorteos y regalos especiales de material de barbero, productos y merchandising.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="collection-grid-item video marketing">
                        <div className="fugu--card-wrap">
                            <div className="fugu--card-thumb">
                                <img src="/images/beneficios/x8.png" alt="" />
                            </div>
                            <div className="fugu--card-data">
                                <h3>Concursos y retos con premios para los ganadores.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="collection-grid-item video marketing">
                        <div className="fugu--card-wrap">
                            <div className="fugu--card-thumb">
                                <img src="/images/beneficios/X9.png" alt="" />
                            </div>
                            <div className="fugu--card-data">
                                <h3>Certificaciones Antonio The Barber.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="collection-grid-item video marketing">
                        <div className="fugu--card-wrap">
                            <div className="fugu--card-thumb">
                                <img src="/images/beneficios/X13.jpg" alt="" />
                            </div>
                            <div className="fugu--card-data">
                                <h3>Documentación y lecciones teóricas actualizadas.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="collection-grid-item video marketing">
                        <div className="fugu--card-wrap">
                            <div className="fugu--card-thumb">
                                <img src="/images/beneficios/X15.jpg" alt="" />
                            </div>
                            <div className="fugu--card-data">
                                <h3>Formaciones privadas y sorteos para asistir a cortes con famosos.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="collection-grid-item video marketing">
                        <div className="fugu--card-wrap">
                            <div className="fugu--card-thumb">
                                <img src="/images/beneficios/X9.jpg" alt="" />
                            </div>
                            <div className="fugu--card-data">
                                <h3>Ser acompañante de Antonio en los eventos a los que asista.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="collection-grid-item video marketing">
                        <div className="fugu--card-wrap">
                            <div className="fugu--card-thumb">
                                <img src="/images/beneficios/X10.jpg" alt="" />
                            </div>
                            <div className="fugu--card-data">
                                <h3>Pertenecer a una comunidad privada donde hacer networking.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="collection-grid-item video marketing">
                        <div className="fugu--card-wrap">
                            <div className="fugu--card-thumb">
                                <img src="/images/beneficios/X12.jpg" alt="" />
                            </div>
                            <div className="fugu--card-data">
                                <h3>Obtener mayor visibilidad en RRSS gracias a promociones de Antonio.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fugu--portfolio-btn" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: "30%" }}>
                        <ConpayButton
                            productAddress="0xfc96dfC4D196953a7018c570A00d150eeDa5be01"
                            text="Comprar pase"
                            customUrl="barber-popup"
                        />
                    </div>
                </div>
            </div>
            {/* <div className="fugu--shape2">
				<img src="/images/shape2/shape2.png" alt="" />
			</div> */}
        </div>
    );
}
