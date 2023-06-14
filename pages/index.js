import dynamic from "next/dynamic";
import Head from "next/head";

import CardSliderOne from "../components/common/sliders/card/card-slider-one";
import TextSliderTwo from "../components/common/sliders/text/text-slider-two";
import HeroSection from "../components/home-three/hero-section";
import NewsLetter from "../components/home-three/news-letter";
import NftRoadMap from "../components/home-three/nft-roadmap";
import Team from "../components/home-three/Team";
import FaqAccordionOne from "../components/common/faq/faq-accordion-one";

const FilterGalarryOne = dynamic(() => import("../components/common/filter-gallary/filter-gallary-one"), {
	ssr: false,
});

const FilterGalarryOneCopy = dynamic(() => import("../components/common/filter-gallary/filter-gallary-one-copy"), {
	ssr: false,
});


export default function IndexThree() {
	return (
		<>
			<Head>
				<title>ANTONIO Barber</title>
			</Head>
			<HeroSection />
			<CardSliderOne />
			<FilterGalarryOne />
			<TextSliderTwo />
			<Team />
			<FilterGalarryOneCopy />
			<FaqAccordionOne />
			<NftRoadMap />
			<NewsLetter />
		</>
	);
}
export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
