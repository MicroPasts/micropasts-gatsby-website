import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/structure/seo"
import OurTeam from "../components/structure/our-team"

const TeamPage = () => (
  <Layout>
    <OurTeam />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Our Team - MicroPasts" description={'Meet the team behind MicroPasts - a crowdfuelled archaeological and heritage citizen science platform'}/>

export default TeamPage