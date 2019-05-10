import React from 'react';
import { Flex, Box } from 'rebass';
import { H1, H3, P } from '../components/VerticalRhythm';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import RespGrid from '../components/RespGrid';
import Figure from '../components/Figure';
import img1 from '../images/Malta/klippen.jpg';
import img2 from '../images/Malta/tuer.jpg';
import img3 from '../images/Malta/klippen2.jpg';
import img4 from '../images/Malta/destinationsKopie.jpg';
import img6 from '../images/Malta/nacht.jpg';

const MaltaPage = () => (
	<Layout>
		<SEO title="Malta" />
		<Section>
			<H1 fontSize={[6]} lineHeight={[1.5]}>
				Malta
			</H1>
			<br />
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<img src={img1} width="600" alt="Coast" float="left" />
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<img src={img2} width="600" alt="Traditional Door" float="left" />
					</Box>
				</Flex>
			</Figure>
			<H3>The pearl of the Mediterranean Sea</H3>
			<RespGrid min={'240px'}>
				<P>
					Malta is by far one of the most stunning islands of Europe. With its perfect mixture of rough and
					calm sea, the destination makes travellers hearts leap for joy. As the island is not very big, there
					is the possibility to travel easily from the rough coast (perfect for surfers) to the calm coast,
					where relaxation and snorkeling play major roles. Furthermore, the island can perfectly be explored
					by car or scooter, as the different "hot spots" are always only a few miles apart from each other.
				</P>
				<P>
					But what makes this destination so special?
					<br />
					Besides the beautiful coasts and lovely locals, the island of Malta has one major benefit over the
					other European islands: It is not a victim of mass tourism. Malta is full of charming places and
					small villages by the sea that come to life when the sun goes down. But as with every destination –
					you have to experience it by yourself. You wnat to know more about the dream destination Malta?
					Don't hesitate to <a href="./contact/">contact us</a>!
				</P>
			</RespGrid>
			<br />
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<img src={img3} width="600" alt="Jump" float="left" />
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<img src={img4} width="600" alt="View" float="left" />
					</Box>
				</Flex>
			</Figure>
			<br />
			<H3>Must-sees in Malta</H3>
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<ul>
							<li> The Blue Grotto</li>
							<li> St. Peter's Pool</li>
							<li> The blue Lagoon (Camino)</li>
							<li> Saint Julians Bay</li>
						</ul>
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<ul>
							<li> Beach bar "Zion" in Marsaskala</li>
							<li> The former azure window</li>
							<li> The city of Marsaxlokk</li>
							<li> The city of Valetta</li>
						</ul>
					</Box>
				</Flex>
			</Figure>
			<Section />
			<Figure>
				<img src={img6} width="100%" height="100%" alt="By Night" float="left" />
			</Figure>
		</Section>
	</Layout>
);

export default MaltaPage;
