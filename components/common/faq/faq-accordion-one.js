import { Accordion } from "react-bootstrap";
export default function FaqAccordionOne() {
	return (
		<div className="fugu--faq-section fugu--section-padding" id="preguntas">
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
										Descarga la aplicación de Cronpay y regístrate. Después regresa a la página web “Antonio The Barber” y haz clic en el botón de comprar pase, ahí podrás iniciar sesión y elegir el que más se adapte a tus necesidades, una vez elegido, introduce el método de pago que prefieras y cómpralo, para tu seguridad tendrás que aceptar la transacción en la aplicación de Cronpay igual que haces con tus compras en internet.
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
										A través del siguiente <a href="mailto:“antoniolabrinth@gmail.com”" target="_blank">enlace </a>
										podrás enviar tu consulta de forma personalizada y la responderemos con la mayor brevedad posible. 
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
