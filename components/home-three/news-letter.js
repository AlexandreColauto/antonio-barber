/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function NewsLetter() {
	return (
		<div className="fugu--newslatter-section" id="mapa"> 	
			<div className="container">
				<div className="fugu--newslatter-wrap">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.8445191607616!2d-6.199363730382039!3d37.35722999825584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1211b102e67b0f%3A0x56365e20249629a8!2sAntonio%20the%20Barber!5e0!3m2!1ses!2sar!4v1686597417577!5m2!1ses!2sar" width="100%" height="600"></iframe>

					{/* <div className="fugu--section-title">
						<div className="fugu--default-content content-sm">
							<h2>Subscribe to get the latest news updates about NFTS</h2>
							<p>
								Get regular updates about interesting & secret upcoming NFT projects & events that are
								coming exclusively on our site.
							</p>
						</div>
					</div>
					<div className="fugu--newsletter">
						<input type="email" placeholder="Type your email here" />
						<button type="submit" id="fugu--submit-btn">
							Subscribe
						</button>
					</div> */}
				</div>
			</div>
			{/* <div className="fugu--shape4">
				<img src="/images/shape2/shape4.png" alt="" />
			</div> */}
		</div>
	);
}
