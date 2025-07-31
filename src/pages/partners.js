import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/structure/seo"
import OurPartners from "../components/structure/our-partners"

const PartnersPage = () => (
  <Layout>
    <OurPartners />
  </Layout>
)

export const Head = () => <Seo title="Our Partners - MicroPasts" description={'Discover the partners collaborating with MicroPasts - a crowdfuelled archaeological and heritage citizen science platform'}/>

export default PartnersPage