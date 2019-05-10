import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const DataProtectionPage = () => (
  <Layout>
    <SEO title="Data Protection" />
    <Section>
      <H1>Data Protection</H1>
      <br />
      <P>
        Unless stated otherwise below, the provision of your personal data is
        neither legally nor contractually obligatory, nor required for
        conclusion of a contract. You are not obliged to provide your data. Not
        providing it will have no consequences. This only applies as long as the
        processing procedures below do not state otherwise. “Personal data” is
        any information relating to an identified or identifiable natural
        person.
      </P>
      <H3>Server log files</H3>
      <P>
        You can use our websites without submitting personal data. Every time
        you access our website, user data is transmitted by your internet
        browser and stored in protocol files (server log files). This stored
        data includes e.g. name of the site called up, date and time of the
        request, amount of data transferred and the provider making the request.
        This data serves exclusively to ensure smooth operation of our website
        and to improve our offering. It is not possible to assign this data to a
        particular person.
      </P>
      <H3>Collection and processing when using the contact form</H3>
      <P>
        When you use the contact form we will only collect your personal data
        (name, email address, message text) in the scope provided by you. The
        data processing is for the purpose of making contact. By submitting your
        message you agree to the processing of your transmitted data. Processing
        will be carried out on the basis of art. 6 (1) lit. a GDPR with your
        consent. You can withdraw your consent at any time by contacting us
        without affecting the legality of the processing carried out with your
        consent up to the withdrawal. We will only use your email address to
        process your request. Finally your data will be deleted, unless you have
        agreed to further processing and use.
      </P>
      <H3>Cookies </H3>
      <P>
        Our website uses cookies. Cookies are small text files which are saved
        in a user’s internet browser or by the user’s internet browser on their
        computer system. When a user calls up a website, a cookie may be saved
        on the user’s operating system. This cookie contains a characteristic
        character string which allows the browser to be clearly identified when
        the website is called up again. We use cookies to make our offering more
        user-friendly, effective and secure. Cookies also allow our systems to
        recognise your browser after a page change and to offer you services.
        Some functions of our website cannot be offered without the use of
        cookies. These services require the browser to be recognised again after
        a page change. Our website also uses cookies to allow us to analyse the
        surfing behaviour of visitors to our website. Processing is carried out
        on the basis of § 15 (3) TMG (Telemedia Act) as well as art. 6 (1) lit.
        f GDPR due to our justified interest in the purposes above. The data
        collected in this way is pseudonymised using technological measures. It
        is therefore not possible to connect the data to your person. The data
        will not be stored together with other personal data pertaining to you.
        You have the right to veto this processing of your personal data
        according to art. 6 (1) lit. f GDPR by contacting us, for reasons
        relating to your personal situation. Cookies will be stored on your
        computer. You therefore have full control over the use of cookies. By
        choosing corresponding technical settings in your internet browser, you
        can prevent the storage of cookies and transmission of the data they
        contain. Cookies which have already been saved may be deleted at any
        time. We would, however, like to point out that this may prevent you
        from making full use of all the functions of this website. Using the
        links below, you can find out how to manage cookies (or deactivate them,
        among other things) in major browsers:
        <br />
        Google Chrome:{" "}
        <a href>https://support.google.com/accounts/answer/61416?hl=en</a>
        <br />
        Internet Explorer:{" "}
        <a href>
          https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies
        </a>
        <br />
        Mozilla Firefox:{" "}
        <a href>
          https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
        </a>
        <br />
        Safari:{" "}
        <a href>
          https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
        </a>
      </P>
      <H3>Duration of storage</H3>
      <P>
        After contractual processing has been completed, the data is initially
        stored for the duration of the warranty period, then in accordance with
        the retention periods prescribed by law, especially tax and commercial
        law, and then deleted after the period has elapsed, unless you have
        agreed to further processing and use.
      </P>
      <H3>Rights of the affected person</H3>
      <P>
        If the legal requirements are fulfilled, you have the following rights
        according to art. 15 to 20 GDPR: Right to information, correction,
        deletion, restriction of processing, data portability. You also have a
        right of objection against processing based on art. 6 (1) GDPR, and to
        processing for the purposes of direct marketing, according to art. 21
        (1) GDPR. Contact us at any time. Our contact details can be found in
        our imprint.
      </P>
      <H3>Right to complain to the regulatory authority</H3>
      <P>
        You have the right to complain to the regulatory authority according to
        art. 77 GDPR if you believe that your data is not being processed
        legally.
      </P>
    </Section>
  </Layout>
)

export default DataProtectionPage
