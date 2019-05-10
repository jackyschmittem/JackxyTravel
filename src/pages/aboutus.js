import React from 'react';
import { Flex, Box } from 'rebass';
import { H1, H3, P } from '../components/VerticalRhythm';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import RespGrid from '../components/RespGrid';
import Figure from '../components/Figure';
import imgAbout from '../images/AboutUs.jpg';
import imgAbout2 from '../images/AboutUs2.jpeg';
import imgAbout3 from '../images/Malta/felix.JPG';

const AboutPage = () => (
	<Layout>
		<SEO title="About Us" />
		<Section>
			<H1 fontSize={[6]} lineHeight={[1.5]}>
				About Us
			</H1>
			<br />
			<center>
				<div class="elastic-video">
					<iframe
						src="https://www.youtube.com/embed/DeZmQUjfslg"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				</div>
			</center>
			<H3>Where we come from</H3>
		</Section>
		<Section>
			<Flex flexWrap="wrap">
				<Box width={[1, 1 / 2]} pr={[0, 2]}>
					<P>
						The company was founded by two students having the passion to discover as much of the world as
						possible. Hereby, the founders found their very own passion for travel planning by organising
						short and long trips for themselves and their loved ones.
					</P>
				</Box>
				<Box width={[1, 1 / 2]} pl={[0, 2]}>
					<P>
						As the demand for individually designed getaways increased, the founders decided to get a name
						for their travel agency: JackxyTravel. Why JackxyTravel? The name is composed of a nickname of
						one of the founders and the obvious passion: travelling.
					</P>
				</Box>
			</Flex>
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 3]}>
						<img src={imgAbout} width="400" alt="Dubai" float="left" />
					</Box>
					<Box width={[1, 1 / 3]} pl={[0, 2]}>
						<img src={imgAbout2} width="400" alt="HongKong" float="left" />
					</Box>
					<Box width={[1, 1 / 3]} pl={[0, 2]}>
						<img src={imgAbout3} width="400" alt="Malta" float="left" />
					</Box>
				</Flex>
			</Figure>
			<Section>
				<H3>Our Mission</H3>
			</Section>
			<RespGrid min={'240px'}>
				<P>
					We dedicate our work to you, the travellers. It is our mission to find the best destinations,
					places, accomodations and flights possible at the best prices available. Your individual dream
					holiday is our goal and we achieve it by identifying your personal needs and wants.
				</P>
				<P>
					It doesn't matter if you are looking for relaxation, an adventure, a family getaway or a city trip –
					our team includes travel consultants specializing in different travel fields. We make sure to find
					your perfect, individual escape from reality.
				</P>
			</RespGrid>
		</Section>
	</Layout>
);

export default AboutPage;
