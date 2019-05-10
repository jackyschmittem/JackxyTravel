import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import Figure from "../components/Figure"
import imgB from "../images/Oslo/promenade.jpg"
import imgC from "../images/Oslo/riesenrad.jpg"

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
      <RespGrid min={"240px"}>
        <P>
          Usually, the French Riviera is known as the hot spot for the rich and
          famous – but there's more about the beautiful south of France! One of
          the best things of the French Riviera is its diversity. One can
          explore the beautiful coast with its curvy streets right at the edge
          of the cliffs and after just a 30 minutes drive into the outback, one
          feels like being in a complete different country. The hard cut between
          the paradisaical coast and the edgy, like the Rocky Mountains looking
          outback is what makes the French Riviera highly impressive.
        </P>
        <P>
          But what makes this destination so special?
          <br />
          The perfect combination of western influence and old, chinese culture
          with its absolutely stunning temples and old buildings makes the city
          a pure jewel on everyone's travel bucket list. Furthermore, one can
          find incredible and internationally known street art in nearly every
          district. But as with every destination – you have to experience it by
          yourself. You want to know more about the French Riviera? Don't
          hesitate to <a href="./contact/">contact us</a>!
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
)

export default OsloPage
