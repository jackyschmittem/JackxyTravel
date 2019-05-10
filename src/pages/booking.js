import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import Figure from "../components/Figure"
import imgA from "../images/Malta/foto.jpg"

const BookingPage = () => (
  <Layout>
    <SEO title="Booking" />
    <Section>
      <H1 fontSize={[6]} lineHeight={[1.5]}>
        Booking
      </H1>
      <br />
    </Section>
    <Section>
      <Figure>
        <img
          src={imgA}
          width="100%"
          height="100%"
          alt="Malta Ocean"
          float="left"
        />
      </Figure>
      <Section />
      <H3>You are interested in booking a JackxyTravel getaway?</H3>
      <br />
      <RespGrid min={"240px"}>
        <P>
          We are very sorry, but as we are keen to realise highly individual
          holidays, we only work on request. Our travel consultants will have
          detailed conversations with you, making sure everything will turn out
          just as you wish it to be. Unfortunately, we cannot guarantee our best
          service by having fixed packages being bookable online.
        </P>
        <P>
          That's why our booking procedure cannot be digitalized yet. However,
          everyone interested can get in touch with us{" "}
          <a href="./contact/">here</a>. We are more than happy to start with
          you together the process of planning your individual dream getaway.
          Please state "booking" in the e-mail subject, so that we can identify
          your booking request right away!
        </P>
      </RespGrid>
    </Section>
  </Layout>
)

export default BookingPage
