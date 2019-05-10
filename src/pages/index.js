import React from 'react';
import { render } from 'react-dom';
import { Flex, Box } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RespGrid from '../components/RespGrid';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Figure from '../components/Figure';
import Section from '../components/Section';
import { H1, P, H2 } from '../components/VerticalRhythm';
import imgStart from '../images/Malta/foto.jpg';
import imgBooking from '../images/Malta/booking.jpg';
import imgDestinations from '../images/Malta/destinations.jpg';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`travel`, `agency`, `holidays`]} />
		<Section>
			<Figure>
				<Flex flexWrap="wrap">
					<img src={imgStart} width="100%" height="100%" alt="Ocean" float="left" />
				</Flex>
			</Figure>
			<H1>Welcome to JackxyTravel</H1>
			<H2>Your partner for dream holidays</H2>
			<RespGrid min={'240px'}>
				<P>
					Discover carefully picked global destinations.
					<br />
					If you are looking for adventures, experiences, moments of glory, relaxation and inspiration –
					JackxyTravel is your partner to be! We are just as passionate about travelling as you are and know
					exactly where to find your individual holiday dream.
				</P>
				<P>
					{' '}
					Our travel consultants help you to find your individual escape from reality by analysing your
					special wishes and wants for your very own dream holiday.
					<br />
					<br />
					Channel your inner bird and fly with JackxyTravel all around the world!
				</P>
			</RespGrid>
			<Figure>
				<Flex flexWrap="wrap">
					<Box width={[1, 1 / 2]} pr={[0, 2]}>
						<Link to="./destinations/">
							<div class="container">
								<img src={imgDestinations} width="600" alt="View Malta" float="left" />
								<div class="overlay">
									<div class="text">Destinations</div>
								</div>
							</div>
						</Link>
					</Box>
					<Box width={[1, 1 / 2]} pl={[0, 2]}>
						<Link to="./booking/">
							<div class="container">
								<img src={imgBooking} width="600" alt="Malta Apartment" float="left" />
								<div class="overlay">
									<div class="text">Booking</div>
								</div>
							</div>
						</Link>
					</Box>
				</Flex>
			</Figure>
		</Section>
	</Layout>
);

export default IndexPage;
