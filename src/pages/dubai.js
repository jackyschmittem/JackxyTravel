import React from 'react';
import { Flex, Box } from 'rebass';
import { H1, H3, P } from '../components/VerticalRhythm';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import RespGrid from '../components/RespGrid';
import Figure from '../components/Figure';
import imgG from '../images/Dubai/Wueste.jpg';
import imgI from '../images/Dubai/Burj.jpg';
import imgJ from '../images/Dubai/Marina.jpg';
import imgK from '../images/Dubai/Garten.jpg';
import imgL from '../images/Dubai/Feuerwerk.jpg';

const DubaiPage = () => (
	<Layout>
		<SEO title="Dubai" />
		<Section>
			<H1 fontSize={[6]} lineHeight={[1.5]}>
				Dubai
			</H1>
			<br />
			<Figure>
				<img src={imgG} width="100%" height="100%" alt="Desert" float="left" />
			</Figure>
			<H3>Modernism meets 1001 nights</H3>
			<RespGrid min={'240px'}>
				<P>
					Dubai is by far one of the most impressive cities of the world. Not just the fact, that it was build
					only a few decades ago out of nowhere – but especially its mixture of modernism and traditional
					values attracts travellers from all over the world. Having said this, Dubai and it's highly
					innovative technologies have a truly high rate of million- and billionaires which one can clearly
					see on the streets: luxury cars everywhere. Plus, the city is one of the cleanest one will ever see!
				</P>
				<P>
					But what makes this destination so special?
					<br />
					The perfect combination of modern buildings and art, traditional values and the desert just a short
					car ride away, makes this destination to either relax or have a trip full of adventures.
					Furthermore, one can find incredible handmade jewelry and traditional clothing in the "Old Dubai"
					where one feels like diving deep into a world of 1001 nights. You want to know more about Dubai?
					Don't hesitate to <a href="./contact/">contact us</a>!
				</P>
			</RespGrid>
			<br />
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<img src={imgI} width="600" alt="Burj Khalifa" float="left" />
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<img src={imgJ} width="600" alt="Dubai Marina" float="left" />
					</Box>
				</Flex>
			</Figure>
			<br />
			<H3>Must-sees in Dubai</H3>
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<ul>
							<li> Dubai Marina</li>
							<li> Burj Khalifa </li>
							<li> Dubai Mall</li>
							<li> Guided desert tour</li>
						</ul>
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<ul>
							<li> JBR walk and beach</li>
							<li> Miracle gardens</li>
							<li> The Dubai souks</li>
							<li> Jumeirah mosk</li>
						</ul>
					</Box>
				</Flex>
			</Figure>
			<Section />
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<img src={imgK} width="600" alt="Miracle Gardens" float="left" />
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<img src={imgL} width="600" alt="Dubai NYE" float="left" />
					</Box>
				</Flex>
			</Figure>
		</Section>
	</Layout>
);

export default DubaiPage;
