import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import CookieConsent from "react-cookie-consent"
import "./styled/layout.css"
import { ThemeProvider } from "styled-components"
import { Flex } from "rebass"
import "typeface-montserrat"
import "typeface-dosis"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faPeace, faCoffee, faYinYang } from "@fortawesome/free-solid-svg-icons"

import theme from "../../theme"
import Container from "../Container"
import Header from "../Header"
import Logo from "../Logo"
import Main from "../Main"
import Footer from "../Footer"
import MenuStyled from "../Menu"
import imgLogo from "../../images/WORTBILD_BLK.png"

library.add(
  fab,
  faCoffee,
  faPeace,
  faYinYang,
  faTwitterSquare,
  faFacebookSquare
)

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            version
          }
        }
      }
    `
  )
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Logo to="/" img={imgLogo} />
          <MenuStyled />
        </Header>
        <br />
        <Main>{children}</Main>
        <Footer>
          <Flex width={"3rem"} justifyContent="space-between">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "twitter-square"]} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </a>
          </Flex>
          <Flex flexDirection="column" fontSize="15px">
            <div>© Website by Jacky Schmittem</div>
          </Flex>
          <Flex flexDirection="column" fontSize="15px">
            <Link to="/contact/">Contact</Link>
            <Link to="/imprint/">Imprint</Link>
            <Link to="/data-protection/">Data Protection</Link>
          </Flex>
        </Footer>
        <CookieConsent
          location="bottom"
          buttonText="I agree!"
          cookieName="gsuaCookie"
          style={{ background: "#555" }}
          buttonStyle={{ color: "#c2c2c2", fontSize: "15px" }}
          expires={150}
        >
          This website uses cookies to enable certain functions and to improve
          your user experience. By continuing to browse the site you are
          agreeing to our use of cookies.
        </CookieConsent>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
