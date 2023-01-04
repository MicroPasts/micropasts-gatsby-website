import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import TeamCard from "./team-card";
import {Row} from "react-bootstrap";
const OurTeam = () => {

  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark(filter: {frontmatter: {section: {eq: "team"}}}) {
              edges {
                  node {
                      id
                      frontmatter {
                          name
                          institution
                          image {
                              childImageSharp {
                                  gatsbyImageData(height: 300, width: 300)
                              }
                          }
                          title
                      }
                  }
              }
          }
      }
  `);
  const People = data.allMarkdownRemark.edges.map(edge => <TeamCard key={edge.node.id} post={edge.node} />);


  return (
  <div className="py-8 bg-pink">
    <div className="container">
      <div className="row mb-8 justify-content-center">
        <div className="col-lg-8 col-md-12 col-12 text-center">
          <span className="text-dark mb-3 d-block text-uppercase fw-semi-bold ls-xl">Who is currently behind this?</span>
          <h2 className="mb-2 display-4 fw-bold">A group of archaeologists</h2>
          <p className="lead">Our team has been working together since 2013, you're welcome to join us...</p>
        </div>
      </div>
      <Row>
        {People}
      </Row>
    </div>
  </div>
    )
}

export default OurTeam