import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Team() {
	return (
		<div className="fugu--team-section fugu--section-padding2" id="partners">
			<div className="container">
				<div className="fugu--section-title-wrap">
					<div className="fugu--section-title">
						<div className="fugu--default-content content-sm">
							<h2>Partners y Empresas Colaboradoras</h2>
							{/* <p>
								Collectors who value these relationships will look for NFTs with unique narratives and
								creation processes.
							</p> */}
						</div>
					</div>
					{/* <div className="fugu--section-button">
						<div className="fugu--portfolio-btn">
							<Link href={"#"} legacyBehavior>
								<a className="fugu--outline-btn">
									<span>View All Members</span>
								</a>
							</Link>
						</div>
					</div> */}
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/logos/babyliss.png" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>BaBylissPRO</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.10s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/logos/studio.png" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>OneStudioMen</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.20s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/logos/level.png" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>L3VEL3 SPAIN</h4>
									{/* <p>Marketing Officer</p> */}
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.30s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/logos/bajo.png" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Block Labs Group</h4>
									{/* <p>Operating Officer</p> */}
								</div>
							</div>
							{/* <button type="button" className="fugu--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button> */}
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.40s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/logos/isaac.png" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Isaac Lyonel</h4>
									{/* <p>Graphic Designer</p> */}
								</div>
							</div>
							{/* <button type="button" className="fugu--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button> */}
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.50s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/logos/cron.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Cronpay</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="fugu--shape3">
				<img src="/images/shape2/shape3.png" alt="" />
			</div> */}
		</div>
	);
}
