import React from 'react';
import { Flex, Box } from 'rebass';
import { H1, H3, P } from '../components/VerticalRhythm';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import RespGrid from '../components/RespGrid';
import Figure from '../components/Figure';
import imgB from '../images/Frankreich/hafen.jpg';
import imgC from '../images/Frankreich/promenade.jpg';
import imgD from '../images/Frankreich/karusell.jpg';
import imgE from '../images/Frankreich/strand.jpg';
import imgF from '../images/Frankreich/riesenrad.jpg';

const FrancePage = () => (
	<Layout>
		<SEO title="French Riviera" />
		<Section>
			<H1 fontSize={[6]} lineHeight={[1.5]}>
				French Riviera
			</H1>
			<br />
			<Figure>
				<img src={imgB} width="100%" height="100%" alt="Marina" float="left" />
			</Figure>
			<H3>It's not all about high society</H3>
			<RespGrid min={'240px'}>
				<P>
					Usually, the French Riviera is known as the hot spot for the rich and famous – but there's more
					about the beautiful south of France! One of the best things of the French Riviera is its diversity.
					One can explore the beautiful coast with its curvy streets right at the edge of the cliffs and after
					just a 30 minutes drive into the outback, one feels like being in a complete different country. The
					hard cut between the paradisaical coast and the edgy, like the Rocky Mountains looking outback is
					what makes the French Riviera highly impressive.
				</P>
				<P>
					But what makes this destination so special?
					<br />
					The perfect combination of western influence and old, chinese culture with its absolutely stunning
					temples and old buildings makes the city a pure jewel on everyone's travel bucket list. Furthermore,
					one can find incredible and internationally known street art in nearly every district. But as with
					every destination – you have to experience it by yourself. You want to know more about the French
					Riviera? Don't hesitate to <a href="./contact/">contact us</a>!
				</P>
			</RespGrid>
			<br />
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<img src={imgC} width="600" alt="Promenade" float="left" />
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<img src={imgD} width="600" alt="Carousel" float="left" />
					</Box>
				</Flex>
			</Figure>
			<br />
			<H3>Must-sees of the French Riviera</H3>
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<ul>
							<li> St. Raphael</li>
							<li> Gorges du Verdun</li>
							<li> "Le Machou" in Cannes</li>
							<li> Cannes</li>
						</ul>
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<ul>
							<li> Port Grimaud</li>
							<li> Coastal streets</li>
							<li> Lac de Saint Croix</li>
							<li> Monaco</li>
						</ul>
					</Box>
				</Flex>
			</Figure>
			<Section />
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<img src={imgE} width="600" alt="Coast" float="left" />
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<img src={imgF} width="600" alt="Wheel" float="left" />
					</Box>
				</Flex>
			</Figure>
		</Section>
	</Layout>
);

export default FrancePage;
