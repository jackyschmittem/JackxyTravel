import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const ImprintPage = () => (
  <Layout>
    <SEO title="Imprint" />
    <Section>
      <H1>Imprint</H1>
      <br />
      <RespGrid min={"240px"}>
        <Box>
          <H3>Responsible</H3>
          <P>
            Jacqueline Schmittem
            <br />
            {"Sachsenring 67 | 50677 Cologne"}
            <br />
            Germany
            <br />
            Email:{" "}
            <a
              title="Contact us via email"
              href="mailto:info@jackyschmittem.de"
            >
              info@jackyschmittem.de
            </a>
          </P>
        </Box>
        <Box>
          <H3>Credits</H3>
          <P>
            © Website by Jacqueline Schmittem
            <br />
            © Photos by Felix Hackland
            <br />© Video by Jacqueline Schmittem
          </P>
        </Box>
      </RespGrid>
      <RespGrid>
        <H3>
          Online settlement of disputes conformable to EU regulation No.
          524/2013
        </H3>
        <P>
          Within the scope of the regulation regarding online settlement of
          disputes of consumer affairs, the EU commission offers you an online
          platform which you will find here{" "}
          <a href="https://ec.europa.eu/odr">https://ec.europa.eu/odr</a>. We
          are neither obligated nor disposed to participate in the dispute
          settlement process.
        </P>
        <H3>Disclaimer</H3>
        <P>
          All texts, images, and further here published information are subject
          to the copyright of the provider, as long as there do not exist
          copyrights of third parties. In every case, copying, spreading, and
          publically displaying are only permitted with a revocable and
          non-transferable consent of the provider.
          <br />
          <br />
          The provider is not responsible for any of the contents of websites
          which are referred to via hyperlinks, since they are not his own
          contents. The linked websites have been checked for illegitimate
          contents at the time of linking and those were not observed. Only the
          websites' operators are responsible for the contents of the linked
          websites. The provider has no general obligation for surveillance and
          assessment. In case of an infringement becoming known, the respective
          link will be removed immediately.
        </P>
      </RespGrid>
    </Section>
  </Layout>
)

export default ImprintPage
