import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CtaInvolved  from "../components/structure/cta-involved";
import WhyUs from "../components/structure/why-us";
import OurTeam from "../components/structure/our-team";
import HelpYou from "../components/structure/help-you";
import Collaborators from "../components/structure/collaborators";
import FeaturedProject from "../components/structure/featured-project";
const IndexPage = () => (
  <Layout>
    <CtaInvolved />
      <WhyUs />
      <FeaturedProject />
      <Collaborators />
    <OurTeam />
    <HelpYou />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage