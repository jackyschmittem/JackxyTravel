import React from 'react';
import { Flex, Box } from 'rebass';
import { H1, H3, P } from '../components/VerticalRhythm';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import RespGrid from '../components/RespGrid';
import Figure from '../components/Figure';
import imgB from '../images/HongKong/handy.jpg';
import imgC from '../images/HongKong/tempel.jpg';
import imgD from '../images/HongKong/streetart.jpg';
import imgE from '../images/HongKong/markt.jpg';
import imgF from '../images/HongKong/nacht.jpg';

const HongKongPage = () => (
	<Layout>
		<SEO title="Hong Kong" />
		<Section>
			<H1 fontSize={[6]} lineHeight={[1.5]}>
				Hong Kong
			</H1>
			<br />
			<Figure>
				<img src={imgB} width="100%" height="100%" alt="Streets" float="left" />
			</Figure>
			<H3>The perfect entry into the Asian world</H3>
			<RespGrid min={'240px'}>
				<P>
					Hong Kong is on of the most impressive cities of the world. Just as it's two parts (Hong Kong island
					and mainland), the metropolis offers travellers a perfect mixture of the traditional Asian culture
					and a more "western" styled Hong Kong (Island). Having said this, Hong Kong and it's stunning
					culture are the perfect destination to start with when exploring Asia. Both, the island and the
					mainland, can be easily explored by tram, metro or foot as the different "hot spots" are most of the
					time nearby.
				</P>
				<P>
					But what makes this destination so special?
					<br />
					The perfect combination of western influence and old, chinese culture with its absolutely stunning
					temples and old buildings makes the city a pure jewel on everyone's travel bucket list. Furthermore,
					one can find incredible and internationally known street art in nearly every district. But as with
					every destination – you have to experience it by yourself. You want to know more about Hong Kong?
					Don't hesitate to <a href="./contact/">contact us</a>!
				</P>
			</RespGrid>
			<br />
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<img src={imgC} width="600" alt="Temple" float="left" />
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<img src={imgD} width="600" alt="Street Art" float="left" />
					</Box>
				</Flex>
			</Figure>
			<br />
			<H3>Must-sees in Hong Kong</H3>
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<ul>
							<li> Man Mo Temple</li>
							<li> Streetart </li>
							<li> Tsim Sha Tsui</li>
							<li> Wong Tai Sin Temple</li>
						</ul>
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<ul>
							<li> Temple Street Night Market</li>
							<li> Victoria Peak (Tram)</li>
							<li> Hong Kong Park</li>
							<li> Any rooftop bar</li>
						</ul>
					</Box>
				</Flex>
			</Figure>
			<Section />
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<img src={imgE} width="600" alt="Night Market" float="left" />
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<img src={imgF} width="600" alt="Skyline" float="left" />
					</Box>
				</Flex>
			</Figure>
		</Section>
	</Layout>
);

export default HongKongPage;
