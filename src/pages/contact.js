import React from 'react';
import { Flex, Box } from 'rebass';
import { H1, H3, P } from '../components/VerticalRhythm';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import RespGrid from '../components/RespGrid';
import Figure from '../components/Figure';
import img1 from '../images/Oslo/riesenrad.JPG';

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" />
		<Section>
			<H1 fontSize={[6]} lineHeight={[1.5]}>
				Contact
			</H1>
			<br />
			<H3>Get in touch with us</H3>
			<RespGrid min={'240px'}>
				<P>
					You want to book your very own JackxyTravel holiday? You want to know further about us and our
					experience?
					<br />
					<br />
					Then feel free to contact us anytime via email! We try to answer your request as fast as possible
					and are very happy to help you with any concerns.
				</P>
				<P>
					Jacky Schmittem
					<br />
					Sachsenring 67
					<br />
					50677 Cologne
					<br />
					Germany
					<br />
					<br />
					Email:{' '}
					<a title="Contact us via email" href="mailto:info@jackyschmittem.de">
						info@jackyschmittem.de
					</a>
				</P>
			</RespGrid>
		</Section>
		<Figure>
			<img src={img1} width="100%" height="100%" alt="Riesenrad" float="left" />
		</Figure>
	</Layout>
);

export default ContactPage;
