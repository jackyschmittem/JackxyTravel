import React from 'react';
import { Flex, Box } from 'rebass';
import { H1, H3, P } from '../components/VerticalRhythm';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import RespGrid from '../components/RespGrid';
import Figure from '../components/Figure';
import img1 from '../images/NY/L1001386.jpg';
import img2 from '../images/NY/L1001071.jpg';
import img3 from '../images/NY/L1001118.jpg';
import img4 from '../images/NY/L1001152.jpg';
import img6 from '../images/NY/L1001050.jpg';

const NYPage = () => (
	<Layout>
		<SEO title="New York" />
		<Section>
			<H1 fontSize={[6]} lineHeight={[1.5]}>
				New York
			</H1>
			<br />
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<img src={img1} width="600" alt="Street" float="left" />
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<img src={img2} width="600" alt="NYPD" float="left" />
					</Box>
				</Flex>
			</Figure>
			<H3>The empire state of mind</H3>
			<RespGrid min={'240px'}>
				<P>
					New York has to be on the bucketlist of every passionate traveller. It is no coincidence that a lot
					famous song writers wrote tons of songs about this incredible city. There is not an area that is not
					fascinating and besides the amazing food one can get on nearly every corner and the people being
					very friendly, the city is beautifully imperfect. Travellers loving the urban style and art of
					living will be highly impressed by the Big Apple and it's authentic appearance.
				</P>
				<P>
					But what makes this destination so special?
					<br />
					Besides the obvious historical museums and memorials, NY presents travellers its cultural heritage
					on nearly every corner. Especially the destricts not belonging to the isle of Manhattan are full of
					beautiful, urban places taking one's breath. But as with every destination – you have to experience
					it by yourself. You wnat to know more about the dream destination Malta? Don't hesitate to{' '}
					<a href="/contact/">contact us</a>!
				</P>
			</RespGrid>
			<br />
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<img src={img3} width="600" alt="By Night" float="left" />
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<img src={img4} width="600" alt="Statue" float="left" />
					</Box>
				</Flex>
			</Figure>
			<br />
			<H3>Must-sees in New York</H3>
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<ul>
							<li> Chelsea Market</li>
							<li> Soho</li>
							<li> Go into a broadway musical</li>
							<li> Enjoy Central Park</li>
						</ul>
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<ul>
							<li> Brooklyn bridge</li>
							<li> High Lane</li>
							<li> 9/11 Memorial & Museum</li>
							<li> Rockefeller Center</li>
						</ul>
					</Box>
				</Flex>
			</Figure>
			<Section />
			<Figure>
				<img src={img6} width="100%" height="100%" alt="Broadway" float="left" />
			</Figure>
		</Section>
	</Layout>
);

export default NYPage;
