import { Accordion } from "react-bootstrap";
export default function FaqAccordionOne() {
	return (
		<div className="fugu--faq-section fugu--section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="fugu--default-content content-black">
							<h2>Preguntas Frecuentes</h2>
							<p>
								Resuelve todas tus dudas para adquirir el pase “The Barber”
							</p>
						</div>
					</div>
					<div className="col-lg-7 offset-lg-1">
						<div className="fugu--accordion-one">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>¿Qué es el pase “The Barber”?</Accordion.Header>
									<Accordion.Body>
										Es una identificación única, personal y digital que permite acceder a una serie de beneficios exclusivos en la barbería.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>¿De qué forma lo obtengo?</Accordion.Header>
									<Accordion.Body>
										Haz click en el botón de comprar que verás en la web, regístrate con tu correo en Cronpay y podrás acceder a obtenerlo, lo podrás pagar tanto en euros como en criptomonedas.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>¿Cómo accedo a todos los beneficios?</Accordion.Header>
									<Accordion.Body>
										Cuando te registras en Cronpay y lo compras, se crea un perfil automáticamente en el que se te asigna ese pase. Con el mismo podrás ir al establecimiento físico y comprobarán que es verídico accediendo a todos los beneficios de cliente en la barbería. A nivel online dentro de la academia cuando te registres se comprobará si pertenece a tu persona y podrás acceder a todos los beneficios para futuros barberos.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>¿Pago único o suscripción?</Accordion.Header>
									<Accordion.Body>
										El pase “The barber” una vez que se obtiene por primera vez, funcionará a modo suscripción, el de clientes de la barbería se renueva automáticamente cada 6 meses y el de aprendices de barbero se renueva mensualmente de forma automática.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>Tengo una duda específica y quiero contactar</Accordion.Header>
									<Accordion.Body>
										A través del siguiente enlace podrás enviar tu consulta de forma personalizada y la responderemos con la mayor brevedad posible. 
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
