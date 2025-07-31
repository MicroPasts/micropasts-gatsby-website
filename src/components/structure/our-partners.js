import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import PartnersCard from "./partners-card";
import {Row} from "react-bootstrap";
const OurPartners = () => {

  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark(filter: {frontmatter: {section: {eq: "partners"}}}) {
              edges {
                  node {
                      id
                      frontmatter {
                          name
                          institution
                          image {
                              childImageSharp {
                                  gatsbyImageData(
                                      height: 300,
                                      width: 300,
                                      backgroundColor: "#ffffff", # This is the correct placement
                                      # Use the transformOptions object to pass sharp arguments
                                      transformOptions: {
                                          fit: CONTAIN
                                      }
                                  )
                              }
                          }
                          title
                          slug
                      }
                  }
              }
          }
      }
  `);
  const Partners = data.allMarkdownRemark.edges.map(edge => <PartnersCard key={edge.node.id} post={edge.node} />);


  return (
  <div className="py-3 bg-pastel">
    <div className="container">
      <div className="row mb-8 justify-content-center">
        <div className="col-lg-8 col-md-12 col-12 text-center">
          <span className="text-dark mb-3 d-block text-uppercase fw-semi-bold ls-xl">Who have we worked with?</span>
          <h2 className="mb-2 display-4 fw-bold">A wide range of partners</h2>
          <p className="lead">Our team has been working together since 2013, you're welcome to join us...</p>
        </div>
      </div>
      <Row>
        {Partners}
      </Row>
    </div>
  </div>
    )
}

export default OurPartners