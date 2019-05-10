import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import imgDubai from "../images/Dubai/überseite.jpg"
import imgHongKong from "../images/HongKong/überseiteneu.jpg"
import imgFrance from "../images/Frankreich/promenade.jpg"
import imgOslo from "../images/Oslo/überseite.jpg"
import imgMalta from "../images/Malta/überseite.jpg"
import imgNY from "../images/NY/L1001386.jpg"

const DestinationsPage = () => (
  <Layout>
    <SEO title="Destinations" />
    <Section>
      <H1 fontSize={[6]} lineHeight={[1.5]}>
        Destinations
      </H1>
      <br />
      <Figure>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} pr={[0, 2]}>
            <Link to="./dubai/">
              <div class="container">
                <img src={imgDubai} width="600" alt="Dubai" float="left" />
                <div class="overlay">
                  <div class="text">Dubai</div>
                </div>
              </div>
            </Link>
          </Box>
          <Box width={[1, 1 / 2]} pl={[0, 2]}>
            <Link to="./hongkong/">
              <div class="container">
                <img
                  src={imgHongKong}
                  width="600"
                  alt="HongKong"
                  float="left"
                />
                <div class="overlay">
                  <div class="text">Hong Kong</div>
                </div>
              </div>
            </Link>
          </Box>
        </Flex>
      </Figure>
      <br />
      <Figure>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} pr={[0, 2]}>
            <Link to="./malta/">
              <div class="container">
                <img src={imgMalta} width="600" alt="Malta" float="left" />
                <div class="overlay">
                  <div class="text">Malta</div>
                </div>
              </div>
            </Link>
          </Box>
          <Box width={[1, 1 / 2]} pl={[0, 2]}>
            <Link to="./newyork/">
              <div class="container">
                <img src={imgNY} width="600" alt="New York" float="left" />
                <div class="overlay">
                  <div class="text">New York</div>
                </div>
              </div>
            </Link>
          </Box>
        </Flex>
      </Figure>
      <br />
      <Figure>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} pr={[0, 2]}>
            <Link to="./oslo/">
              <div class="container">
                <img src={imgOslo} width="600" alt="Oslo" float="left" />
                <div class="overlay">
                  <div class="text">Oslo</div>
                </div>
              </div>
            </Link>
          </Box>
          <Box width={[1, 1 / 2]} pl={[0, 2]}>
            <Link to="./frenchriviera/">
              <div class="container">
                <img
                  src={imgFrance}
                  width="600"
                  alt="French Riviera"
                  float="left"
                />
                <div class="overlay">
                  <div class="text">French Riviera</div>
                </div>
              </div>
            </Link>
          </Box>
        </Flex>
      </Figure>
    </Section>
  </Layout>
)

export default DestinationsPage
