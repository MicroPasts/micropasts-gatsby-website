import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/structure/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Col, Row } from "react-bootstrap";

const PartnerProfile = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <Container fluid className="py-3 bg-white">
        <Container>
          <Col md={12}  lg={12} xl={12}>
            <h1 className={"fw-bold"}>{frontmatter.name}</h1>
          </Col>
        </Container>
      </Container>

      <Container fluid className={"bg-pastel"}>
        <Container className="py-3">
          <Row className="">
            <Col md={6}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Col>
            <Col md={6} className="text-center">
              <GatsbyImage
                image={getImage(frontmatter.image)}
                alt={frontmatter.name}
                style={{ width: '300px', height: '300px' }} // You can adjust these values
              />
              <h3 className="fw-bold mt-4 mb-3">Partner Details</h3>
              <ul className="list-unstyled">
                {frontmatter.institution && (
                  <li>
                    <strong>Institution:</strong> {frontmatter.institution}
                  </li>
                )}
                {frontmatter.website && (
                  <li>
                    <strong>Website:</strong> <a href={frontmatter.website} target="_blank" rel="noopener noreferrer">{frontmatter.website}</a>
                  </li>
                )}
                {frontmatter.twitter && (
                  <li>
                    <strong>X account:</strong> <a href={`https://x.com/${frontmatter.twitter}`} target="_blank" rel="noopener noreferrer">{frontmatter.twitter}</a>
                  </li>
                )}
                {frontmatter.email && (
                  <li>
                    <strong>Email:</strong> <a href={`mailto:${frontmatter.email}`}>{frontmatter.email}</a>
                  </li>
                )}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export const Head = ({ data }) => {
  return (
    <Seo title={`Partner: ${data.markdownRemark.frontmatter.name}`} />
  );
};

export const query = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                name
                institution
                website
                twitter
                email
                image {
                    childImageSharp {
                        gatsbyImageData(
                            height: 300,
                            width: 300,
                            backgroundColor: "#ffffff", # This is the correct placement
                            transformOptions: {
                                fit: CONTAIN
                            }
                        )
                    }
                }
            }
            html
        }
    }
`;

export default PartnerProfile;