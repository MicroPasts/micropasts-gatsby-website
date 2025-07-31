import React from "react";
import { Container, Row } from "react-bootstrap";
import FeatureCard from "./feature-card";
import { graphql, useStaticQuery } from "gatsby";

const WhyUs = () => {

  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark(filter: {frontmatter: {section: {eq: "features"}}}) {
              edges {
                  node {
                      id
                      rawMarkdownBody
                      frontmatter {
                          title
                          alt
                          link
                          image {
                              childImageSharp {
                                  gatsbyImageData(height: 500, width: 500)
                              }
                          }
                      }
                  }
              }
          }
      }
  `);
  const Features = data.allMarkdownRemark.edges.map(edge => <FeatureCard key={edge.node.id} post={edge.node} />);


  return (
    <section id="why-us ">
      <Container fluid className="why-us section-bg bg-pastel py-5">
        <Container>
          <span className="text-danger mb-3 d-block text-uppercase fw-semi-bold ls-xl text-center">Creativity, open research, powered by you</span>

          <h2 className="display-4 mt-4 mb-3 text-dark fw-bold text-center">What have we created with the crowd?</h2>

          <Row>
            {Features}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default WhyUs;