import React from 'react';
import { Flex, Box } from 'rebass';
import { H1, H3, P } from '../components/VerticalRhythm';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import RespGrid from '../components/RespGrid';
import Figure from '../components/Figure';
import imgB from '../images/Oslo/promenade.jpg';
import imgC from '../images/Oslo/riesenrad.jpg';

const OsloPage = () => (
	<Layout>
		<SEO title="Oslo" />
		<Section>
			<H1 fontSize={[6]} lineHeight={[1.5]}>
				Oslo
			</H1>
			<br />
			<Figure>
				<img src={imgB} width="100%" height="100%" alt="Fjord" float="left" />
			</Figure>
			<H3>The untypical typical capital of Norway</H3>
			<RespGrid min={'240px'}>
				<P>
					In contrast to the other capitals of the world, Oslo has a small population of aaprox. 647.676
					inhabitants. Nevertheless, the city is in no way inferring other capitals such as Kopenhagen or
					Berlin. The city presents travelers the perfect mixture between historical architecture and
					modernity. Further, it is a very innovative city being shown by a lot of new technologies used
					throughout the whole city and even the taxis being electric. The Norwegian people as such can be
					considered to be very introverted, but as soon as one gets to know them better, they are very
					welcoming towards travellers!
				</P>
				<P>
					But what makes this destination so special?
					<br />
					Even though it is relatively expensive to live there, one can truly have a great time if one knows
					how and where to eat, for example. Further, the marina area is absolutely stunning and you get a
					great impression of the Norwegian flair. Even though, the city evolves its pure beauty in the summer
					a visit in the winter is definitely worth it! But as with every destination – you have to experience
					it by yourself. You want to know more about the French Riviera? Don't hesitate to{' '}
					<a href="./contact/">contact us</a>!
				</P>
			</RespGrid>
			<br />
			<Figure>
				<img src={imgC} width="100%" height="100%" alt="Wheel" float="left" />
			</Figure>
			<br />
			<H3>Must-sees in Oslo</H3>
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<ul>
							<li> Botanical gardens</li>
							<li> Vigeland Sculpture Park</li>
							<li> Aker Brygge</li>
							<li> The Royal Palace</li>
						</ul>
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<ul>
							<li> Nordmarka</li>
							<li> The Norwegian National Opera & Ballet</li>
							<li> Fjord</li>
							<li> Café Fomoto</li>
						</ul>
					</Box>
				</Flex>
			</Figure>
			<Section />
		</Section>
	</Layout>
);

export default OsloPage;
